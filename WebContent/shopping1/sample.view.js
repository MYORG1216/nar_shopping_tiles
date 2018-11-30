sap.ui.jsview("routing.shopping1.sample", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf routing.shopping1.sample
     */
    getControllerName: function () {
        return "routing.shopping1.view1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf routing.shopping1.sample
     */
    createContent: function (oController) {
        return new sap.m.Page({
            title: "Title",
            height: "60%",
            content: {
                path: "userModel>/signedup",
                factory: (sIdx, oContext) => {
                    return new sap.m.GenericTile({
                        header: "{userModel>fname} {userModel>lname}",
                        subheader: "{userModel>email}",
                        tileContent: new sap.m.TileContent({
                            content: [
                                new sap.m.Text({
                                    text: "{userModel>mobile}"
                                })
                            ]
                        })
                    });
                }

            },
            footer: new sap.m.Bar({
                contentLeft: [
                    new sap.m.Button({
                        text: "Home",
                        icon: "sap-icon://nav-back",
                        type: sap.m.ButtonType.Emphasized,
                        press: ()=>{
                            oController.getOwnerComponent().getRouter().navTo("view1")
                        }
                    })
                ],
                contentRight: [
                    new sap.m.Button({
                        text: "Cart",
                        icon: "sap-icon://feeder-arrow",
                        type: sap.m.ButtonType.Emphasized,
                        press: ()=>{
                            oController.getOwnerComponent().getRouter().navTo("cart")
                        }
                    })
                ]
            })
        });
    }

});