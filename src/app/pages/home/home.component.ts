import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , CarouselModule ,  CommonModule, ButtonModule, TagModule, AccordionModule,
    AvatarModule, BadgeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {
  isClicked = false;
  courses = [
    {
      'image': '../../../assets/images/course.png',
      'date': '10-01-2024',
      'title': 'برنامج تطوير القيادة العليا ورؤساء مجالس المحافظات',
      'time': '9:00 - 10:00'
    },
    {
      'image': '../../../assets/images/course.png',
      'date': '09-02-2024',
      'title': 'برنامج تطوير القيادة العليا ورؤساء مجالس المحافظات',
      'time': '10:00 - 11:00'
    },
    {
      'image': '../../../assets/images/course.png',
      'date': '08-03-2024',
      'title': 'برنامج تطوير القيادة العليا ورؤساء مجالس المحافظات',
      'time': '11:00 - 12:00'
    }
  ] 
    accordionQuestions = [
      {
        'question': 'ما هي البرامج التعليمية التي يقدمها المعهد العالي لإعداد وتأهيل القادة؟',
        'answer': 'المعهد يقدم مجموعة متنوعة من البرامج التي تغطي القيادة، الإدارة، وتنمية المهارات الشخصية. تركز هذه البرامج على تطوير القدرات القيادية وبناء الكفاءات اللازمة لمواجهة تحديات العمل والتطوير المهني.'
      },
      {
        'question': ' كيف يمكنني التسجيل في البرامج المتاحة؟',
        'answer': 'التطوير المهني هو عملية تحسين المهارات المهنية والمعرفة لتحسين الأداء المهني والتحسين المستمر للأداء المهني.'
      },
      {
        'question': 'هل يتطلب المعهد شروطاً خاصة للالتحاق بالبرامج؟',
        'answer': 'التطوير المهني هو عملية تحسين المهارات المهنية والمعرفة لتحسين الأداء المهني والتحسين المستمر للأداء المهني.'
      }
    ]
   
  

  carouselImages: string[] = [
    '../../../assets/images/hero-1.png',
    '../../../assets/images/hero-2.png',
    // Add more image paths as needed
  ];

  currentSlide = 0;

  ngOnInit() {
    this.autoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.isClicked = true;
  }

  autoSlide() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
    }, 5000); // Change slide every 5 seconds
  }

  getArabicMonth(monthNumber: string): string {
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    return arabicMonths[parseInt(monthNumber) - 1] || '';
  }
}
