import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles/StylesSheet";
import { useRouter } from "expo-router";
import axios from "axios";
import { baseUrl, token } from "../../constants/constants";
import EventModal from "../eventModal";

export default function Event({
  id,
  child,
  eventModal,
  setEventModal,
  setEventId,
}) {
  const router = useRouter();
  const [event, setEvent] = useState([]);
  setEventId(id);
  const fetchEvents = () => {
    axios
      .get(`${baseUrl}/events/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEvent(response.data);
      });
  };

  useEffect(fetchEvents, []);
  console.log(event);
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          /* router.push({ pathname: `/event`, params: { id: event.id } }) */
          {setEventModal(true);
          setEventId(id);}
        }
      >
        <View style={styles.event}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ marginBottom: 8 }}>{event.event_time_start}</Text>
              <Text>{event.event_time_finish}</Text>
            </View>
            <View style={styles.stick}></View>
            <View>
              <Text style={{ fontWeight: 700 }}>{event.main_name}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ marginRight: 8 }}
                  source={require("../../assets/images/notification.png")}
                />
                <Image source={require("../../assets/images/notes.png")} />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {child == "Петя" ? (
              <Image source={require("../../assets/images/Boy.png")} />
            ) : (
              <Image source={require("../../assets/images/Girl.png")} />
            )}
            <Text>{child}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
