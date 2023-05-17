import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateOrganizationComponent } from './shared/create-organization/create-organization.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component'
import { UserManagementComponent } from './shared/user-management/user-management.component';
import { CreateRoleComponent } from './shared/user-management/create-role/create-role.component';
import { EditUserComponent } from './shared/user-management/edit-user/edit-user.component';
import { JobsResumeComponent } from './shared/jobs/jobs-resume/jobs-resume.component';
import { CreateJobComponent } from './shared/jobs/create-job/create-job.component';
import { UploadResumeComponent } from './shared/jobs/upload-resume/upload-resume.component';
import { CandidatesComponent } from './shared/candidates/candidates.component';
import { AddCandidatesComponent } from './shared/candidates/add-candidates/add-candidates.component';
import { FinalStageComponent } from './shared/candidates/final-stage/final-stage.component';
import { InterEvaluationComponent } from './shared/candidates/inter-evaluation/inter-evaluation.component';
import { OfferConfirmationComponent } from './shared/candidates/offer-confirmation/offer-confirmation.component';
import { OnboardingComponent } from './shared/candidates/onboarding/onboarding.component';
import { ReportingGraphComponent } from './shared/candidates/reporting-graph/reporting-graph.component';
import { ScheduleInterviewComponent } from './shared/candidates/schedule-interview/schedule-interview.component';
import { SendOfferComponent } from './shared/candidates/send-offer/send-offer.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'Create-orga',component: CreateOrganizationComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'Login',component: LoginComponent}, 
  {path: 'Footer',component: FooterComponent}, 
  {path: 'user',component: UserManagementComponent}, 
  {path: 'user-role',component:CreateRoleComponent},
  {path:'edit-user', component:EditUserComponent},
  {path:'Jobs-Resume', component:JobsResumeComponent},
  {path:'create-job', component:CreateJobComponent},
  {path:'upload-resume', component:UploadResumeComponent},
  {path:'candidates', component:CandidatesComponent},
  {path:'add-candidates', component:AddCandidatesComponent},
  {path:'final-stage', component:FinalStageComponent},
  {path:'inter-evaluation', component:InterEvaluationComponent},
  {path:'offer-confirmation', component:OfferConfirmationComponent},
  {path:'on-boarding', component:OnboardingComponent},
  {path:'reporting-graph', component:ReportingGraphComponent},
  {path:'schedule-interview', component:ScheduleInterviewComponent},
  {path:'send-offer', component:SendOfferComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
