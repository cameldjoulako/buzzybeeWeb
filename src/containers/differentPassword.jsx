import React, { Component } from 'react';
import { isLength } from 'validator';
import Button from 'material-ui/Button/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import { Handler, Waiting, DefaultWithErrors, Success, HideOnWaiting } from '../components/Reusable/StatusHandler';
import { POST, BackendUrl } from '../requests';
import ErrorInput from '../components/Reusable/ErrorInput';

export default class changePassword extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      status: 'default',
      errors: [],
      success: '',
      fields: {
        currentPassword: { value: '', validation: [], name: 'Current Password' },
        password: {
          value: '',
          validation: [{
            func: value => isLength(value, { min: 10 }),
            msg: 'Your password has to be at least 10 characters long',
          }, {
            func: value => /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(value),
            msg: 'Your password has to have at least: 1 lower case english letter, 1 upper case english letter and 1 number',
          }],
          name: 'Password',
        },
        password2: {
          value: '',
          validation: [{
            func: value => value === this.state.fields.password.value,
            msg: 'Both password fields have to have the same value',
          }],
          name: 'Confirm Password',
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkForError = this.checkForError.bind(this);
    this.close = this.close.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.submit = this.submit.bind(this);
  }

  checkForError() {
    let error = false;
    Object.keys(this.state.fields).forEach(key => {
      const field = this.state.fields[key];
      field.validation.forEach(({ func }) => { if (typeof func === 'function') if (!func(field.value)) error = true; });
    });
    return error;
  }

  handleChange(key, e) {
    const { value } = e.target;
    this.setState(state => {
      const modified = {
        ...state.fields[key],
        value,
      };

      return {
        fields: {
          ...state.fields,
          [key]: modified,
        },
      };
    });
  }

  submit(e) {
    e.preventDefault();
    const data = JSON.parse(JSON.stringify(this.state.fields));
    Object.keys(data).forEach(key => {
      data[key] = data[key].value;
    });
    data.username = this.props.username;

    if (!this.checkForError()) {
      this.setState({ status: 'waiting', errors: [] });
      POST(`${BackendUrl}/changePassword`, data)
        .then(response => {
          if (Array.isArray(response)) {
            this.setState({
              errors: response,
              status: 'default',
            });
          } else {
            this.setState({ status: 'success', errors: [], success: response.success });
          }
        }).catch(() => {
          this.setState({
            errors: ['There was an error, try again later! \n Error: INTERNAL'],
            status: 'default',
          });
        });
    }
  }

  close() {
    const { fields } = this.state;
    Object.keys(fields).forEach(key => {
      fields[key].value = '';
    });
    this.setState({ fields, open: false });
  }

  renderInputs() {
    return Object.keys(this.state.fields).map(
      key => {
        const { value, validation, name } = this.state.fields[key];
        return (
          <ErrorInput
            fullWidth
            key={name}
            type="password"
            label={name}
            value={value}
            validation={validation}
            onChange={e => this.handleChange(key, e)}
          />
        );
      },
    );
  }

  renderContent() {
    return (
      <Handler status={this.state.status}>
        <DefaultWithErrors errorMessages={this.state.errors}>
          <form onSubmit={this.submit}>
            {this.renderInputs()}
            <button type="submit" className="btn" disabled={this.checkForError()}>Change</button>
          </form>
        </DefaultWithErrors>
        <Success msg={this.state.success} />
        <Waiting />
      </Handler>
    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ open: true })} className="btn btn-success">Change Password</button>
        <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
          <DialogTitle disableTypography>
            <span style={{ fontSize: '19px' }}>Change Password</span>
          </DialogTitle>
          <DialogContent>
            {this.renderContent()}
          </DialogContent>
          <DialogActions>
            <HideOnWaiting status={this.state.status}>
              <Button onClick={() => this.close()} style={{ color: '#222', fontSize: '1.1em' }}>
                {this.state.status === 'success' ? 'Close' : 'Cancel'}
              </Button>
            </HideOnWaiting>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
