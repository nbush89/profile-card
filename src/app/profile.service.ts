import { Injectable } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: UserProfile = {
    name: "Nicole",
    contact: "nbush89@gmail.com",
    bio: "I am a student at GC and I like to be outside"
  };
  getUserProfile() {
    return this.userProfile;
  }
  setUserProfile(profile: UserProfile) {
    this.userProfile = profile;
  }
  constructor() {}
}
