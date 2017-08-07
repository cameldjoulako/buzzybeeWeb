import React, { Component } from 'react';

class Story extends Component {

    render() {
        return (
            <div className="container story">
                <img className="narrator-pic" src="successpicture.png" alt="" />
                <h4 className="story-title"><em>Eileen, software engineer at therachat.io</em></h4>
                <p><em>This week we got a chance to interview Eileen Zhong. She is a software engineer at Therachat.io. Eileen not only managed to break into the tech industry without a computer science background but she managed to do so as a woman. Here is the interview:</em></p>
                <p><strong>Tell us a little about your background, and how you decide to venture into software engineering?</strong></p>
                <p>"I’ve been working in the Tech Industry for the past 10 months now but I didn’t come from a traditional computer science background. I went through my undergraduate career with aspirations of going to dental school and eventually becoming a dentist. However, in my senior year, after many semesters of physiology, biology, and ochem, I realized I didn’t want to be a dentist. I could either continue feeling unfulfilled but comfortable going down the path I was on or take a leap of faith and try to find something I love. I went with the latter. Software engineering came to mind when I asked myself what I could potentially be good at and enjoy. For some reason, MySpace, of all things, came up… I remember personalizing themes and editing my personal page with little style tweaks here and there. I always had such a great time that I decided software engineering would be the first alternative path I could try. Thankfully, it stuck and I am still loving it to this day!"</p>
                <p><strong>Did you go back to school to become a software engineer?</strong></p>
                <p>"No. I attended a coding bootcamp right after graduating with a non-CS degree. The bootcamp I attended is no longer around because of some legal issues. I would strongly advise anyone considering a bootcamp to do their research before committing." </p>
                <p><strong>Would you advise people to attend a bootcamp if going back to school isn’t an option? </strong></p>
                <p>"Yes, definitely. I would also tell them that their mentality and perspective going into a bootcamp are keys to their success not only in finishing that bootcamp, but also in their career. I started the bootcamp with the wrong mentality: I thought it would teach me all the skills I could ever need to be a great software engineer. However, the truth is: no bootcamp can ever give that to you. The best any given bootcamp can do is to teach you how to teach yourself. You need to continue to push yourself to learn relevant technologies, and the only way you are going to do that is if you know how to learn and if you have the drive."</p>
                <p><strong>For the people who recently graduated from a bootcamp and are having a hard time finding a job, what is some advice that you would give them?  </strong></p>
                <p>"I learned that getting a job is more than having the right set of skills. It involves skills and a lot of luck. Having a strong and relevant development toolkit adds onto the skills, which contributes to the luck… but ultimately, it’s a numbers game. You need to get your name out there and you can do this in whatever way you want. You can build a strong online presence by writing blogs, uploading tutorials, and contributing to open source projects. As you do this, you’ll not only make yourself better known within the engineering community, but you’ll also find you now have bits and pieces to add to your portfolio."</p>
                <p><strong>What were some obstacles that you had to overcome?</strong></p>
                <p>"I think there is some truth when I say for most people, landing that first job will always be the hardest. That was the case for me, at least. I spent a couple weeks unemployed, and while that might not seem like a lot, jobseekers understand that even a day is a long period of time. I began to doubt myself during that time because I had no experience in the industry and the only relevant education I had was from a somewhat unknown bootcamp. Even though every day was rough, I kept applying to jobs and I kept myself busy with my personal projects. I guess I just knew that software engineering was it for me. I loved building everything about it too much to envision myself working in another profession."</p>
                <p><strong>Did you face any obstacles as a woman? </strong></p>
                <p>"Yes, for sure. I’d also like to point out that it’s not just in the engineering field that there is an egregious discrepancy in the gender gap… it’s infamous across all STEM fields. A recent example that comes to mind was when I attended a hackathon where coders and recruiters were on two separate floors. The first floor was a hiring/social mixer and the second floor was where all the hackers were hacking away. To get to the second floor, you have to go up an escalator that was manned by a security guard. I didn’t know you had to have your badge out in order to access the second floor, but I was stopped by the security guard and told that recruiters stayed downstairs and only programmers were allowed upstairs. He assumed this because my badge was in my backpack. I was the only woman among a group of male engineers -- and none of them had their badges out either. This is only one of many instances."</p>
                <p><strong>How can the industry improve the actions/treatment towards women? </strong></p>
                <p>"I think it all boils down to awareness. Everyone needs to be aware of their actions and whether or not they are being discriminatory against someone because of their gender, race, religion, etc. Women are not second-class citizens and are not inferior in any way, shape, or form to their male counterparts." </p>
                <p><strong>What are some last thoughts/advice?</strong></p>
                <p>"Don’t be greedy. Take chances. Take the job that pays you a little less, but gives you the autonomy to pick technologies and build features. Take every learning opportunity you can get: the opportunities that will make you a better developer and the opportunities that will make you a better person. And last, don’t ever get discouraged. The world is your oyster!"</p>
                <p><em>For more awesome stories check out our <a href="https://www.facebook.com/buzzybee.io/" target="_blank">facebook</a> page!</em></p>
            </div>

        )
    }

}

export default Story; 