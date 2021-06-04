import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import AddItem from "./Components/AddItem";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";

export default function App() {
    const [items, setItems] = useState([
        { id: uuid.v4(), text: "Rapoo Mouse" },
        { id: uuid.v4(), text: "Rapoo Keyboard" },
        { id: uuid.v4(), text: "AMD Rygen 8" },
    ]);

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id != id);
        });
    };

    const addItem = (text) => {
        if (!text) {
            Alert.alert("Error!", "Please enter an item", [{ text: "Ok" }]);
        } else {
            setItems((prevItems) => {
                return [{ id: uuid.v4(), text }, ...prevItems];
            });
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <AddItem addItem={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem item={item} deleteItem={deleteItem} />
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
});
