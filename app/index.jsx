import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { styles } from "../styles/StylesSheet";
import {
  Calendar,
  WeekCalendar,
  CalendarProvider,
} from "react-native-calendars";
import { token, baseUrl } from "../constants/constants";
import Day from "../components/calendar/day";
import axios from "axios";
import SwitchCalendarModal from "../components/addModals/switchCalendarModal";
import Event from "./event";
import EventModal from "../components/eventModal";
import AddEventModal from "../components/addEventModal";
import Profile from "./profile";

const Petr = { key: "Petr", color: "#A12FAA", selectedDotColor: "blue" };
const Ann = { key: "Ann", color: "#FD9800", selectedDotColor: "blue" };

export default function Index() {
  const router = useRouter();
  const [clickCategory, setClickCategory] = useState("");
  const [clickSchedule, setClickSchedule] = useState("");
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [switchCalendarModal, setSwitchCalendarModal] = useState(false);
  const [addEventModal, setAddEventModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false)
  const [eventModal, setEventModal] = useState(false);
  const [eventId, setEventId] = useState('')
  const [filterSchedule, setFilterSchedule] = useState([]);
  let [switchCalendar, setSwitchCalendar] = useState("month");
  let markedDates = {};
console.log(eventModal)
  allEvents.forEach((item) => {
    markedDates[item.event_date] = {
      dots: [item.child.name == "Петя" ? Petr : Ann],
    };
  });

  const getSchedule = () => {
    let schedule = events
      .filter(function (item) {
        return item.schedule != null;
      })
      .map((item) => ({ id: item.schedule.id, name: item.main_name }));

    setFilterSchedule(
      Array.from(new Set(schedule.map(JSON.stringify))).map(JSON.parse)
    );
    console.log("schedule");
  };

  const fetchData = () => {
    axios
      .get(`${baseUrl}/events/?date=${new Date().toISOString().slice(0, 10)}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEvents(response.data);
      });
    axios
      .get(`${baseUrl}/events/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllEvents(response.data);
      });
    axios
      .get(`${baseUrl}/users/children/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
        setCategories((categories) => [...categories, { id: "", name: "Все" }]);
      });
    getSchedule();
  };

  useEffect(fetchData, []);
  useEffect(() => getSchedule(), []);
  const fetchFilterEvents = (childId = "", date = "") => {
    axios
      .get(`${baseUrl}/events/?child=${childId}&date=${date}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEvents(response.data);
      });
    setClickCategory(childId);
  };

  const dates = events
    .map((item) => item.event_date)
    .filter(function (date) {
      let today = new Date().toISOString().slice(0, 10);
      return date >= today;
    })
    .reduce((result, item) => {
      return result.includes(item) ? result : [...result, item];
    }, []);

  return (
    <View>
      
      {eventModal && (
        <EventModal
          eventModal={eventModal}
          setEventModal={setEventModal}
          id={eventId}
        />
      )}
      
      <ScrollView style={styles.container}>
        <StatusBar theme="auto" />
        {/* <View style={styles.topPanel}>
          <Text style={{ fontSize: hp(4), fontWeight: 700 }}>Календарь</Text>
          <View>
            <TouchableOpacity
              style={styles.switch}
              onPress={() => setSwitchCalendarModal(true)}
            >
              <Text>{switchCalendar == "month" ? "Месяц" : "Неделя"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: `/profile`, params: { id: 7 } })
            }
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("../assets/images/profile.png")}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Image source={require("../assets/images/logo.png")} />
            <View style={styles.block}>
              <Image source={require("../assets/images/back.png")} />
              <Text>Сегодня</Text>
              <Image source={require("../assets/images/back.png")} />
            </View>
            <View style={styles.block}>
              <Text>Расписание</Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Text>Расписания</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setProfileModal(true)}>
              <View style={styles.avatar}>
                <Image source={require("../assets/images/mam.png")} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View>
          <FlatList
            style={styles.categoriesItems}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => fetchFilterEvents(item.id)}
                key={item}
              >
                <View
                  style={[
                    styles.category,
                    clickCategory === item.id && styles.click,
                  ]}
                >
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View> */}
        <View style={styles.mainBlock}>
          <View style={styles.calendarBlock}>
            <TouchableOpacity
              style={styles.buttonGrey}
              onPress={() => {
                setAddEventModal(true);
              }}
            >
              <Text style={{ fontWeight: 700 }}>Добавить событие</Text>
            </TouchableOpacity>
            <Calendar
              style={{
                borderRadius: 20,
                marginBottom: 32 /* backgroundColor: "#FFF6EC"  */,
              }}
              markingType={"multi-dot"}
              firstDay={1}
              markedDates={markedDates}
              onDayPress={(day) => {
                fetchFilterEvents("", day.dateString);
              }}
            />
            <View>
              <Text>Члены семьи</Text>
              <FlatList
                style={styles.familyItems}
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => fetchFilterEvents(item.id)}
                    key={item}
                  >
                    <View style={styles.familyItem}>
                      <View
                        style={[
                          styles.avatar,
                          clickCategory === item.id && styles.click,
                        ]}
                      >
                        {item.name == "Петя" ? (
                          <Image source={require("../assets/images/Boy.png")} />
                        ) : (
                          <Image
                            source={require("../assets/images/Girl.png")}
                          />
                        )}
                        <Text
                          style={{
                            fontSize: styles.fontSizeText,
                            paddingLeft: 10,
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View>
              <FlatList
                style={styles.categoriesItems}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterSchedule}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => fetchFilterEvents("", "", "", item.id)}
                    key={item}
                  >
                    <View
                      style={[
                        styles.category,
                        clickSchedule === item.id && styles.click,
                      ]}
                    >
                      <Text style={{ fontSize: 14 }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={[styles.eventsBlock]}>
            <FlatList
              data={dates}
              renderItem={({ item }) => (
                <View>
                  <Day
                    date={item}
                    events={events}
                    key={item.id}
                    eventModal={eventModal}
                    setEventModal={setEventModal}
                    setEventId={setEventId}
                  />
                </View>
              )}
            />
          </View>
          
        </View>
        
      </ScrollView>
      {profileModal && <Profile setProfileModal={setProfileModal} profileModal={profileModal} />}
      <SwitchCalendarModal
        switchCalendarModal={switchCalendarModal}
        setSwitchCalendarModal={setSwitchCalendarModal}
        switchCalendar={switchCalendar}
        setSwitchCalendar={setSwitchCalendar}
        events={events}
        setEvents={setEvents}
      />
      <AddEventModal
        addEventModal={addEventModal}
        setAddEventModal={setAddEventModal}
      />
      
    </View>
  );
}
