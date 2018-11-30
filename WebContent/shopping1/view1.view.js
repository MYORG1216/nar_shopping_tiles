sap.ui.jsview("routing.shopping1.view1", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf routing.shopping1.view1
     */
    getControllerName: function () {
        return "routing.shopping1.view1";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf routing.shopping1.view1
     */
    createContent: function (oController) {
        let oView = this;
        this.menuBtnProfile = new sap.m.MenuItem({
            text: "Profile",
            press: [oController.profileEvt, oController]
        });
        this.menuBtnLogOut = new sap.m.MenuItem({
            text: "LogOut",
            press: [oController.logOutEvt, oController]
        });
        this.menuBtn = new sap.m.MenuButton({
            visible: false,
            icon: "sap-icon://customer",
            text:
                "{userModel>/loggedin/fname} {userModel>/loggedin/lname}",
            menu:
                new sap.m.Menu({
                    items: [
                        this.menuBtnProfile,
                        this.menuBtnLogOut
                    ]
                })
        });
        this.profileLogOut = new sap.m.Button({
            text: "LogOut",
            width: "40%",
            type: sap.m.ButtonType.Reject,
            press: [oController.logOutEvt, oController]
        });
        this.profileBack = new sap.m.Button({
            text: "Back",
            width: "40%",
            type: sap.m.ButtonType.Back,
            press: [oController.profileBackEvt, oController]
        });
        this.logInTile = new sap.m.GenericTile({
            header: "LogIn",
            backgroundImage: "shopping1/images/tile.jpg",
            tileContent: new sap.m.TileContent({
                content: [
                    new sap.m.ImageContent({
                        src: "shopping1/images/login1.jpg"
                    })
                ]
            }),
            press: [oController.logInTileEvt, oController]
        }).addStyleClass("sapUiSmallMarginEnd");
        this.signUpTile = new sap.m.GenericTile({
            header: "SignUp",
            backgroundImage: "shopping1/images/tile.jpg",
            tileContent: new sap.m.TileContent({
                content: [
                    new sap.m.ImageContent({
                        src: "shopping1/images/signup1.jpg"
                    })
                ]
            }),
            press: [oController.signUpTileEvt, oController]
        });
        this.logInForm = new sap.ui.layout.form.Form({
            title: "LogIn",
            width: "100%",
            layout: new sap.ui.layout.form.FormLayout({}),
            formContainers: new sap.ui.layout.form.FormContainer({
                formElements: new sap.ui.layout.form.FormElement({
                    fields: [
                        new sap.m.Input({
                            placeholder: "Mobile/Email",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/loginform/username}"
                        }),
                        new sap.m.Input({
                            placeholder: "Password",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/loginform/password}",
                            type: sap.m.InputType.Password
                        }),
                        new sap.m.Button({
                            text: "Submit",
                            width: "40%",
                            type: sap.m.ButtonType.Accept,
                            press: [oController.logInSbmtEvt, oController]
                        }),
                        new sap.m.Button({
                            text: "Cancel",
                            width: "40%",
                            type: sap.m.ButtonType.Reject,
                            press: [oController.logInCnclEvt, oController]
                        })
                    ]
                })
            })
        }).addStyleClass("textAlignCenter");
        this.signUpForm = new sap.ui.layout.form.Form({
            title: "SignUp",
            width: "100%",
            layout: new sap.ui.layout.form.FormLayout({}),
            formContainers: new sap.ui.layout.form.FormContainer({
                formElements: new sap.ui.layout.form.FormElement({
                    fields: [
                        new sap.m.Input({
                            placeholder: "FirstName",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/fname}",
                        }),
                        new sap.m.Input({
                            placeholder: "LastName",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/lname}",
                        }),
                        new sap.m.DatePicker({
                            placeholder: "Date Of Birth",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/dob}"
                        }),
                        new sap.m.Input({
                            placeholder: "Email",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/email}"
                        }),
                        new sap.m.Input({
                            placeholder: "Mobile",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/mobile}",
                            type: sap.m.InputType.Number
                        }),
                        new sap.m.Input({
                            placeholder: "Password",
                            textAlign: sap.ui.core.TextAlign.Center,
                            value: "{userModel>/signupform/password}",
                            type: sap.m.InputType.Password
                        }),
                        new sap.m.Button({
                            text: "Submit",
                            width: "40%",
                            type: sap.m.ButtonType.Accept,
                            press: [oController.signUpSbmtEvt, oController]
                        }),
                        new sap.m.Button({
                            text: "Cancel",
                            width: "40%",
                            type: sap.m.ButtonType.Reject,
                            press: [oController.signUpCnclEvt, oController]
                        })
                    ]
                })
            })
        }).addStyleClass("textAlignCenter");
        this.profileList = new sap.m.List({
            headerText: "Profile",
            visible: true,
            items: [
                new sap.m.StandardListItem({
                    title: "Name",
                    description: {
                        parts: ["userModel>/profileList/fname", "userModel>/profileList/lname"],
                        formatter: (fname, lname) => {
                            return fname + " " + lname;
                        }
                    }
                }),
                new sap.m.StandardListItem({
                    title: "D.O.B",
                    description: "{userModel>/profileList/dob}"
                }),
                new sap.m.StandardListItem({
                    title: "Email",
                    description: "{userModel>/profileList/email}"
                }),
                new sap.m.StandardListItem({
                    title: "Mobile",
                    description: "{userModel>/profileList/mobile}"
                })
            ]
        }).addStyleClass("textAlignCenter");
        this.logInGrid = new sap.ui.layout.Grid({
            visible: false,
            defaultSpan: "L12 M12 S12",
            position: sap.ui.layout.GridPosition.Center,
            width: "80%",
            content: [
                this.logInForm,
            ]
        });
        this.signUpGrid = new sap.ui.layout.Grid({
            visible: false,
            defaultSpan: "L12 M12 S12",
            position: sap.ui.layout.GridPosition.Center,
            width: "40%",
            content: [
                this.signUpForm,
            ]
        });
        this.profileGrid = new sap.ui.layout.Grid({
            defaultSpan: "L12 M12 S12",
            position: sap.ui.layout.GridPosition.Center,
            width: "100%",
            content: [
                this.profileList,
                this.profileLogOut,
                this.profileBack
            ]
        }).addStyleClass("textAlignCenter");
        this.logAndSignFBox = new sap.m.FlexBox({
            justifyContent: sap.m.FlexJustifyContent.Center,
            alignItems: sap.m.FlexAlignItems.Center,
            fitContainer: true,
            items: [
                this.logInTile,
                this.signUpTile,
                this.logInGrid,
                this.signUpGrid
            ]
        });
        this.profileFBox = new sap.m.FlexBox({
            visible: false,
            justifyContent: sap.m.FlexJustifyContent.Center,
            alignItems: sap.m.FlexAlignItems.Center,
            fitContainer: true,
            items: [
                this.profileGrid
            ]
        });
        this.cartBtn = new sap.m.Button({
            visible: false,
            icon: "sap-icon://cart",
            press: [oController.view1CrtBtnEvt, oController]
        });
        this.mainCntFBox = new sap.m.FlexBox({
            visible: false,
            justifyContent: sap.m.FlexJustifyContent.Center,
            alignItems: sap.m.FlexAlignItems.Center,
            fitContainer: true,
            items: {
                path: "userModel>/img/category",
                factory: (sIdx, oContext) => {
                    return new sap.m.GenericTile({
                        header: "{userModel>id}",
                        backgroundImage: "shopping1/images/tile.jpg",
                        tileContent: new sap.m.TileContent({
                            content: [
                                new sap.m.ImageContent({
                                    src: "{userModel>loc}"
                                })
                            ]
                        }),
                        press: [oController.mainTileEvt, oController]
                        // press: (oEvnt) => {
                        //     debugger
                        //     var oBinding = oEvnt.getSource().getBinding("header").getContext();
                        //     debugger
                        //     this.subCntFBox.bindElement(`userModel>${oBinding.getPath()}`);
                        //     debugger
                        // }
                    }).addStyleClass("sapUiSmallMarginEnd");
                }

            }
        });
        // this.subCntFBox = new sap.m.FlexBox({
        //     visible: false,
        //     justifyContent: sap.m.FlexJustifyContent.Center,
        //     alignItems: sap.m.FlexAlignItems.Center,
        //     fitContainer: true,
        //     items: {
        //         path: "userModel>items",
        //         factory: (sIdx, oContext) => {
        //             return new sap.m.FlexBox({
        //                 height: "40%",
        //                 width: "20%",
        //                 backgroundDesign: sap.m.BackgroundDesign.Translucent,
        //                 direction: sap.m.FlexDirection.Column,
        //                 items: [
        //                     new sap.m.Title({
        //                         text: "{userModel>id}"
        //                     }),
        //                     new sap.m.Image({
        //                         src: "{userModel>loc}"
        //                     })
        //                 ],
        //                 // press: (oEvnt) => {
        //                 //     var oBinding = oEvnt.getSource().getBinding("header").getContext();
        //                 //     this.shoppingSubTiles.bindElement(`userModel>${oBinding.getPath()}`);
        //                 // }
        //             }).addStyleClass("sapUiSmallMarginEnd");
        //         }
        //
        //     }
        //
        // });
        this.subCntFBox = new sap.ui.layout.Grid({
            visible: false,
            content: {
                path: "userModel>items",
                factory: (sIdx, oContext) => {
                    return new sap.m.FlexBox({
                        height: "300px",
                        width: "300px",
                        backgroundDesign: sap.m.BackgroundDesign.Translucent,
                        alignItems: sap.m.FlexAlignItems.Center,
                        direction: sap.m.FlexDirection.Column,
                        items: [
                            new sap.m.Image({
                                height: "200px",
                                width: "200px",
                                src: "{userModel>loc}"
                            }),
                            new sap.m.Title({
                                text: "{userModel>id}"
                            })
                        ],
                        // press: (oEvnt) => {
                        //     var oBinding = oEvnt.getSource().getBinding("header").getContext();
                        //     this.shoppingSubTiles.bindElement(`userModel>${oBinding.getPath()}`);
                        // }
                    }).addStyleClass("sapUiSmallMargin");
                }

            }

        });
        return new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentMiddle: [new sap.m.Label({
                    text: "My App"
                })],
                contentRight: [
                    this.cartBtn
                ]
            }),
            subHeader: new sap.m.Bar({
                contentRight: [
                    this.menuBtn
                ]
            }),
            content: [
                this.logAndSignFBox,
                this.profileFBox,
                this.mainCntFBox,
                this.subCntFBox
            ],
        });
    }

});