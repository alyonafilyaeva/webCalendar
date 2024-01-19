import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { members, colors, baseUrl, token } from "../../constants/constants";
import { styles } from "../../styles/StylesSheet";
import Categories from "../categories";
import axios from "axios";

export default function AddFamilyModal({ addFamilyModal, setAddFamilyModal }) {
  const [name, setName] = useState();
  const [childId, setChildId] = useState();
  const addChild = () => {
    axios.post(
      `${baseUrl}/users/children/`,
      {
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAddFamilyModal(false)
    setName('')
  };

  return (
    <View>
      <Modal
        visible={addFamilyModal}
        animationType="slide"
        transparent={true}
        style={{ zIndex: 10 }}
      >
        <View
          style={{
            top: "50%",
            left: 700,
            display: "flex",
            width: 300,
            backgroundColor: "#FFF",
            padding: 16,
            shadowColor: "#000",
            shadowRadius: 4,
            shadowOffset: { width: -6, height: -4 },
            shadowOpacity: 0.2,
            borderTopColor: "#EFEAEA",
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: 700 }}>
              Добавить члена семьи
            </Text>

            <TouchableOpacity onPress={() => addChild()}>
              <Image source={require("../../assets/images/done.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              style={styles.categoriesItems}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={members}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setChildId(item.id)}>
                  <View
                    style={[
                      styles.category,
                      childId == item.id && styles.click,
                    ]}
                  >
                    <Text style={[{ fontSize: 14 }]}>{item.member}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Text style={{ fontSize: styles.fontSizeText, fontWeight: 700 }}>
              Имя
            </Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
