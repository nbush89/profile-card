import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserProfile } from "../interfaces/user-profile";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile;
  constructor(
    private service: ProfileService,
    private routerInstance: Router
  ) {}

  ngOnInit(): void {
    this.profile = this.service.getUserProfile();
  }
  editProfile(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.routerInstance.navigate(["profile"]);
  }
}
