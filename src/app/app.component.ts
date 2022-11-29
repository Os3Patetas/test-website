import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "landingPage";

  @ViewChild("fontAcess", { static: false })
  section: ElementRef<HTMLInputElement> = {} as ElementRef;

  setSize(textSize: any) {
    if (
      this.section.nativeElement.style.getPropertyValue("font-size") ===
      textSize
    ) {
      this.section.nativeElement.style.setProperty("font-size", textSize);
    } else {
      this.section.nativeElement.style.setProperty("font-size", textSize);
    }
  }
}
