sap.ui.controller("routing.shopping1.view1", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf routing.shopping1.view1
     */
//	onInit: function() {
//
//	},
    logInTileEvt() {
        this.getView().logInTile.setVisible(false);
        this.getView().signUpTile.setVisible(false);
        this.getView().logInGrid.setVisible(true);
    },
    signUpTileEvt() {
        this.getView().logInTile.setVisible(false);
        this.getView().signUpTile.setVisible(false);
        this.getView().signUpGrid.setVisible(true);
    },
    logInSbmtEvt() {
        let oSampModel = this.getOwnerComponent().getModel("userModel");
        let lForm = oSampModel.getProperty("/loginform");
        let sUser = oSampModel.getProperty("/signedup");
        let lUser = oSampModel.getProperty("/loggedin");
        let pUser = oSampModel.getProperty("/profileList");
        for (let i = 0; i < sUser.length; i++) {
            if (lForm.password === sUser[i].password && (lForm.username === sUser[i].mobile || sUser[i].email === lForm.username)) {
                lUser = JSON.parse(JSON.stringify(sUser[i]));
                lForm.username = "";
                lForm.password = "";
                pUser.fname = sUser[i].fname;
                pUser.lname = sUser[i].lname;
                pUser.dob = sUser[i].dob;
                pUser.email = sUser[i].email;
                pUser.mobile = sUser[i].mobile;
//			oSampModel.setData(oSampModel.getData());
                oSampModel.setProperty("/loggedin", lUser);
                this.getView().logInTile.setVisible(true);
                this.getView().signUpTile.setVisible(true);
                this.getView().logInGrid.setVisible(false);
                this.getView().logAndSignFBox.setVisible(false);
                this.getView().cartBtn.setVisible(true);
                this.getView().menuBtn.setVisible(true);
                this.getView().mainCntFBox.setVisible(true);
                break;
            }
        }
    },
    signUpSbmtEvt() {
        let oSampModel = this.getOwnerComponent().getModel("userModel");
        let sUser = oSampModel.getProperty("/signedup");
        let sForm = oSampModel.getProperty("/signupform");
        sUser.push(JSON.parse(JSON.stringify(sForm)));
        sForm.fname = "";
        sForm.lname = "";
        sForm.dob = "";
        sForm.email = "";
        sForm.mobile = "";
        sForm.password = "";
        oSampModel.setProperty("/signupform", sForm);
        this.getView().logInTile.setVisible(true);
        this.getView().signUpTile.setVisible(true);
        this.getView().signUpGrid.setVisible(false);
        this.getView().cartBtn.setVisible(false);
        this.getView().menuBtn.setVisible(false);
        this.getView().logAndSignFBox.setVisible(true);
    },
    logInCnclEvt() {
        let oSampModel = this.getOwnerComponent().getModel("userModel");
        let lForm = oSampModel.getProperty("/loginform");
        lForm.username = "";
        lForm.password = "";
        oSampModel.setProperty("/loginform", lForm);
        this.getView().logInTile.setVisible(true);
        this.getView().signUpTile.setVisible(true);
        this.getView().logInGrid.setVisible(false);
    }
    ,
    signUpCnclEvt() {
        let oSampModel = this.getOwnerComponent().getModel("userModel");
        let sForm = oSampModel.getProperty("/signupform");
        sForm.fname = "";
        sForm.lname = "";
        sForm.dob = "";
        sForm.email = "";
        sForm.mobile = "";
        sForm.password = "";
        oSampModel.setProperty("/signupform", sForm);
        this.getView().logInTile.setVisible(true);
        this.getView().signUpTile.setVisible(true);
        this.getView().signUpGrid.setVisible(false);
    }
    ,
    view1CrtBtnEvt: function () {
        let oRoute = this.getOwnerComponent().getRouter();
        oRoute.navTo("cart");
    },
    profileEvt() {
        this.getView().menuBtnProfile.setVisible(false);
        this.getView().menuBtnLogOut.setVisible(false);
        this.getView().profileFBox.setVisible(true);
    },
    logOutEvt() {
        let oSampModel = this.getOwnerComponent().getModel("userModel");
        let lUser = oSampModel.getProperty("/loggedin");
        lUser.fname = "";
        lUser.lname = "";
        lUser.dob = "";
        lUser.email = "";
        lUser.mobile = "";
        lUser.password = "";
        oSampModel.setProperty("/loggedin", lUser);
        this.getView().menuBtnProfile.setVisible(true);
        this.getView().menuBtnLogOut.setVisible(true);
        this.getView().menuBtn.setVisible(false);
        this.getView().profileFBox.setVisible(false);
        this.getView().cartBtn.setVisible(false);
        this.getView().mainCntFBox.setVisible(false);
        this.getView().logAndSignFBox.setVisible(true);
    },
    profileBackEvt() {
        this.getView().menuBtnProfile.setVisible(true);
        this.getView().menuBtnLogOut.setVisible(true);
        this.getView().profileFBox.setVisible(false);
        this.getView().mainCntFBox.setVisible(true);
    },
    mainTileEvt(oEvnt) {
        let subCntTilePath = oEvnt.getSource().getBinding("header").getContext().getPath();
        this.getView().subCntFBox.bindElement(`userModel>${subCntTilePath}`);
        this.getView().mainCntFBox.setVisible(false);
        this.getView().subCntFBox.setVisible(true);
    }
    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf routing.shopping1.view1
     */
//	onBeforeRendering: function() {
//
//	},

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf routing.shopping1.view1
     */
//	onAfterRendering: function() {
//
//	},

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf routing.shopping1.view1
     */
//	onExit: function() {
//
//	}

})
;