import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

export let backgroundColorMain = "#ADB9E3";
export let backgroundColorSecondary = "#818C99";
export let backgroundColor = "#FFF6EC";
export let backgroundColorItems = "#EFEAEA";
export let colorCheck = "#313B97";
export let fontSizeTitle = 22;
export let fontSizeText = 14;
export let marginRightElements = 8;
export let marginTopBlocks = 32;
export let marginTopInsideBlocks = 16;
export let borderRadius = 20;
export let heightCategories = 40;

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: marginTopInsideBlocks,
    backgroundColor: backgroundColor,
    height: "100%",
  },
  topPanel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: marginTopInsideBlocks,
  },
  categories: {
    display: "flex",
    flexDirection: "column",
    marginTop: marginTopBlocks,
    marginBottom: marginTopBlocks,
  },
  category: {
    borderRadius: borderRadius,
    borderWidth: 1,
    borderColor: backgroundColorMain,
    backgroundColor: backgroundColor,
    /* height: heightCategories, */
    alignItems: "flex-end",
    marginRight: 10,
    padding: 8,
  },
  plus: {
    borderRadius: borderRadius,
    borderWidth: 1,
    backgroundColor: backgroundColor,
    borderColor: backgroundColorMain,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: marginRightElements,
    marginBottom: 10,
    /* paddingLeft: 10,
    paddingRight: 10, */
    width: 40,
    height: 40,
  },
  about: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: marginTopBlocks,
  },
  family: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: marginTopBlocks,
  },
  familyItems: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    marginTop: marginTopInsideBlocks,
  },
  familyItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  addresses: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: marginTopBlocks,
  },
  addressItems: {
    display: "flex",
    flexDirection: "row",
    width: 200,
    marginTop: marginTopInsideBlocks,
  },
  addressItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
    marginBottom: marginTopInsideBlocks,
  },
  addButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: borderRadius,
    borderWidth: 1,
    borderColor: backgroundColorMain,
    backgroundColor: backgroundColor,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: 120,
    fontSize: fontSizeText,
  },
  categoriesItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: marginTopInsideBlocks,
  },
  input: {
    borderRadius: borderRadius,
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    width: "100%",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 10,
    marginTop: marginTopInsideBlocks,
    paddingLeft: 10,
    paddingRight: 10,
  },

  family: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: marginTopInsideBlocks,
  },
  familyItems: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
  },
  familyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  oneEvent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dateInput: {
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    width: "50%",
    borderRadius: borderRadius,
    paddingLeft: 10,
    marginRight: marginRightElements,
  },
  timeInput: {
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    borderRadius: borderRadius,
    width: "17%",
    paddingLeft: 10,
    marginRight: marginRightElements,
  },
  timing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    marginTop: marginTopInsideBlocks,
    borderBottomColor: backgroundColorSecondary,
    borderBottomWidth: 1,
  },
  repeat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  time: {
    display: "flex",
    justifyContent: "center",
    borderRadius: borderRadius,
    backgroundColor: backgroundColorItems,
    height: heightCategories,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    /* marginTop: marginTopInsideBlocks, */
    marginRight: marginRightElements,
  },
  buttonWhite: {
    borderRadius: borderRadius,
    borderColor: backgroundColorSecondary,
    borderWidth: 1,
    height: heightCategories,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: marginRightElements,
  },
  buttonGrey: {
    borderRadius: borderRadius,
    borderColor: backgroundColorMain,
    borderWidth: 1,
    height: heightCategories,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    /* width: 200, */
    backgroundColor: backgroundColorMain,
    marginBottom: marginRightElements,
  },
  event: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: marginTopInsideBlocks,
    width: 300,
  },
  stick: {
    marginRight: marginRightElements,
    marginLeft: marginRightElements,
    backgroundColor: "#ADB9E3",
    borderRadius: borderRadius,
    width: 8,
    height: 46,
  },
  checkDay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addElement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: marginTopInsideBlocks,
  },
  switch: {
    borderRadius: borderRadius,
    backgroundColor: backgroundColorMain,
    borderColor: "red",
    padding: marginRightElements,
    paddingRight: 20,
  },
  week: {
    justifyContent: "center",
    paddingLeft: 5,
    height: heightCategories,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderColor: backgroundColorSecondary,
    borderWidth: 1,
  },
  month: {
    justifyContent: "center",
    paddingLeft: 5,
    height: heightCategories,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderColor: backgroundColorSecondary,
    borderWidth: 1,
  },
  click: {
    backgroundColor: backgroundColorMain,
    color: "#000",
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: backgroundColor,
    borderRadius: 50,
    borderColor: backgroundColorMain,
    borderWidth: 1,
    padding: 12,
    marginBottom: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftHeader: {
    display: "flex",
    flexDirection: "row",
  },
  rightHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  block: {
    /* flex: 1, */
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: backgroundColorMain,
    borderWidth: 1,
    height: 46,
    padding: 20,
    marginRight: marginRightElements,
    marginLeft: marginRightElements,
  },
  mainBlock: {
    display: "flex",
    flexDirection: "row",
    borderRadius: borderRadius,
    borderColor: backgroundColor,
    borderWidth: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  calendarBlock: {
    display: "flex",
    flexDirection: "column",
    width: 320,
    /* backgroundColor: "#FFFBF7", */
    padding: 20,
  },
  eventsBlock: {
    backgroundColor: "#FFF",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
    width: "75%",
    borderTopRightRadius: 20,
  },
  eventModal: {
    width: 350,
    backgroundColor: "#FFF",
    position: "absolute",
    top: 100,
    left: 1050,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },
  addEventModal: {
    width: 350,
    backgroundColor: "#FFF",
    /* position: 'absolute', */
    top: "11%",
    left: "73%",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
    paddingBottom: 100,
  },
  sheduleItems: {
    display: "flex",
    flexDirection: "columnf",
  },
  profile: {
    display: "flex",
    width: 350,
    top: "-49%",
    left: "70%",
    zIndex: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 16
  },
});
