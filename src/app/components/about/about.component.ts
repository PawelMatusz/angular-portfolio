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
      answer: "My name is Pawel and I am a Frontend Developer with over two years of experience in the field. Throughout my career, I have had the opportunity to work on a variety of projects, which have helped me hone my skills and develop a deep understanding of programming. In my free time, I enjoy cycling, traveling, and spending active time with my family.",
    },
    {
      question: 'What are your strengths?',
      answer: "I'm a quick learner and thrive in fast-paced environments. I'm also highly organized and able to manage multiple projects simultaneously.",
    },
    {
      question: 'What are your weaknesses?',
      answer: "My the biggest weaknesses is my English and I practice my spoken English that's why I have been doing a private English course in my free time.",
    },
    {
      question: 'What motivates you in your work?',
      answer: "I am motivated by the challenges and growth opportunities that the IT industry offers me. I enjoy solving problems and implementing innovations that benefit my team and the company. I also like to see immediate results from my work.",
    },
    {
      question: 'What was your greatest accomplishment?',
      answer: "One of my biggest accomplishment is the fact that I have become a programmist without graduating in this field. I believe it's thanks to my determination and hard work.",
    },
  ]
}
