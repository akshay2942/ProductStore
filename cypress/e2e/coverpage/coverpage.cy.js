///<reference types="cypress"/>
import { DemoblazeCoverPage } from "../../support/DemoblazeCoverPage";
import phone from "../../fixtures/phoneData.json";

let DemoblazeCover = new DemoblazeCoverPage();

describe(
  "verifying the functionality of demoblaze website",
  { retries: 1 },
  () => {
    phone.forEach((data, index) => {
      it.only(
        `verify${data.iteam} the add to cart functionality ${index}`,
        { Timeout: 5000 },
        () => {
          DemoblazeCover.NavigateSite("https://www.demoblaze.com/");
          DemoblazeCover.SignIn("akshay1234", "akshay1234");
          DemoblazeCover.GetProductList(data.iteam);
          cy.get("#navbarExample>ul.navbar-nav.ml-auto>li>a").eq(3).click();
        }
      );
    });
  }
);
