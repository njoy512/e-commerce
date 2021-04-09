import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  // navIcons = [
  //   {
  //     name: 'nav_custom_dashboard',
  //     url: 'assets/images/nav_icons/dashboard.svg'
  //   },
  //   {
  //     name: 'nav_custom_operators',
  //     url: 'assets/images/nav_icons/operators.svg'
  //   },
  //   {
  //     name: 'nav_custom_certifications',
  //     url: 'assets/images/nav_icons/certifications.svg'
  //   },
  //   {
  //     name: 'nav_custom_certification_tasks',
  //     url: 'assets/images/nav_icons/certification_tasks.svg'
  //   },
  //   {
  //     name: 'nav_custom_inspections',
  //     url: 'assets/images/nav_icons/inspections.svg'
  //   },
  //   {
  //     name: 'nav_custom_finance',
  //     url: 'assets/images/nav_icons/finance.svg'
  //   },
  //   {
  //     name: 'nav_custom_comments',
  //     url: 'assets/images/nav_icons/comments.svg'
  //   },
  //   {
  //     name: 'nav_custom_reports',
  //     url: 'assets/images/nav_icons/reports.svg'
  //   },
  //   {
  //     name: 'nav_custom_task_planner',
  //     url: 'assets/images/nav_icons/task-planner.svg'
  //   },
  //   {
  //     name: 'nav_custom_leads',
  //     url: 'assets/images/nav_icons/leads.svg'
  //   },
  //   {
  //     name: 'nav_custom_projects',
  //     url: 'assets/images/nav_icons/projects.svg'
  //   },
  //   {
  //     name: 'nav_custom_hr',
  //     url: 'assets/images/nav_icons/hr.svg'
  //   },
  //   {
  //     name: 'nav_custom_forms',
  //     url: 'assets/images/nav_icons/forms.svg'
  //   }
  // ]

  constructor(
    // private matIconRegistry: MatIconRegistry,
    // private domSanitizer: DomSanitizer
  ) {
    // this.matIconRegistry.addSvgIcon(
    //   "unicorn",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/unicorn_icon.svg")
    // );
    // this.registerNavIcons();
  }

  ngOnInit(): void {
  }

  // registerNavIcons() {
  //   this.navIcons.forEach(element => {
  //     this.matIconRegistry.addSvgIcon(
  //       element.name,
  //       this.domSanitizer.bypassSecurityTrustResourceUrl(element.url)
  //     );
  //   });
  // }

}
