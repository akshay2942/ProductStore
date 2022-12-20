
export class DemoblazeCoverPage {
    elements={
        logo:'#nava',
        signup:'#navbarExample>ul.navbar-nav.ml-auto>li>a',
        homeBtn:'#navbarExample>ul.navbar-nav.ml-auto>li>a',
        cartBtn:'#navbarExample>ul.navbar-nav.ml-auto>li>a',
        signupusername:'#sign-username',
        sognipPassword:'#sign-password',
        signinUsername:'#loginusername',
        signinPassword:'#loginpassword',
        loginbtn:'#navbarExample>ul.navbar-nav.ml-auto>li>a',
        dropDnList:'.card-title',
        card:'a',
       addtocart:'.btn.btn-success.btn-lg'
    }

  
    NavigateSite(url){
        cy.visit(url)
        cy.get(this.elements.logo).should('contain','PRODUCT STORE')
    }
    Signup(username,password){
        cy.get(this.elements.signup).last().click({force:true})
        cy.window().then(win => {
            cy.wait(1000)
            cy.get(this.elements.signupusername).type(username)
            cy.get(this.elements.sognipPassword).type(password)
            cy.get('.modal-footer >button[onclick="register()"]').click()
         
          });

    }
    SignIn(username,password){
    cy.get('div#exampleModal.modal.fade').invoke('removeAttr','display')
        cy.get(this.elements.loginbtn).eq(4).click({force:true})
        cy.window().then(win => {
            cy.wait(1000)
            cy.get(this.elements.signinUsername).type(username)
            cy.get(this.elements.signinPassword).type(password)
            cy.get('.modal-footer >button[onclick="logIn()"]').click()
            cy.get('#itemc').click()
          })
    }

//main product add to cart 
    GetProductList(selectElement) {
        cy.get(this.elements.dropDnList).find(this.elements.card).each(function (el) {
        if(el.text().includes(selectElement)){
            cy.wrap(el).click({multiple:true})
            cy.get('.btn.btn-success.btn-lg').click({force:true})  
            cy.on('window:alert',function(el){
                expect(el).to.eq('Product added')
            })
        }
        })
  
      }
    }
    //--------------------------------------------------------------
