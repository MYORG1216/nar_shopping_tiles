sap.ui.jsview("routing.shopping1.cart", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf routing.shopping1.cart
     */
    getControllerName: function () {
        return "routing.shopping1.view1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf routing.shopping1.cart
     */
    createContent: function (oController) {
        return new sap.m.Page({
            title: "Cart",
            showNavButton: true,
            navButtonPress: [oController.crtNavBtnEvt, oController],
            navButtonType: sap.m.ButtonType.Back,
            subHeader: new sap.m.Bar({
                contentMiddle: [
                    new sap.m.Label({
                        text: "{userModel>/loggedin/fname} {userModel>/loggedin/lname}"
                    })
                ]
            }),
            footer: new sap.m.Bar({
                contentLeft: [
                    new sap.m.Button({
                        text: "Users",
                        icon: "sap-icon://nav-back",
                        type: sap.m.ButtonType.Emphasized,
                        press: () => {
                            oController.getOwnerComponent().getRouter().navTo("sample");
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button({
                        text: "Users",
                        icon: "sap-icon://feeder-arrow",
                        type: sap.m.ButtonType.Emphasized,
                        press: () => {
                            oController.getOwnerComponent().getRouter().navTo("sample");
                        }
                    })
                ]
            })
        });
    }

});