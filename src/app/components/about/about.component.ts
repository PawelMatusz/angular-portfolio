import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './about'

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AboutComponent {

  faqs: About[] = [
    {
      question: 'Can you tell me about yourself?',
      answer: "My name is Pawel, I am Frontend Developer. In my free time, I enjoy [your hobbies or interests].",
    },
    {
      question: 'What are your strengths?',
      answer: "I'm a quick learner and thrive in fast-paced environments. I'm also highly organized and able to manage multiple projects simultaneously.",
    },
    {
      question: 'What are your weaknesses?',
      answer: "I would like to practise more my spoken English that's why I have been doing a private English course in my free time.",
    },
    {
      question: 'What motivates you in your work?',
      answer: "I am motivated by the challenges and growth opportunities that the IT industry offers me. I enjoy solving problems and implementing innovations that benefit my team and company.",
    },
    {
      question: 'What was your greatest accomplishment?',
      answer: "One of my biggest accomplishment is the fact that I have become a programmist without graduating in this field. I believe it's thanks to my determination and hard work.",
    },
  ]
}
