import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text, View } from "react-native";

// Định nghĩa component Screen01
const Screen01 = ({ navigation }) => {
    return (
        // View chính bao bọc toàn bộ nội dung
        <View style={{ flex: 1 }}>
            {/* View chứa hình ảnh */}
            <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 30 }}>
                <Image source={require("../assets/Data/Container_17.png")} height={100}></Image>
            </View>

            {/* View chứa tiêu đề và mô tả */}
            <View>
                <Text style={{ fontSize: 30, fontWeight: "600", marginLeft: 45 }}>Boost Productivity</Text>
                <Text style={{ fontSize: 15, marginLeft: 45, color: "gray" }}>Simplify tasks,Boost Productivity</Text>
            </View>

            {/* View chứa nút Sign up */}
            <View>
                <TouchableOpacity
                    style={{
                        width: "94%",
                        marginLeft: 16,
                        marginTop: 11,
                        backgroundColor: "rgb(34 200 247)",
                        paddingVertical: 11,
                        borderRadius: 20,
                    }}
                    onPress={() => navigation.navigate("Screen02")} // Điều hướng đến Screen02 khi nhấn nút
                >
                    <Text style={{ color: "white", textAlign: "center" }}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* View chứa nút Login */}
            <View>
                <Text style={{ color: "black", textAlign: "center", marginTop: 20 }}>Login</Text>
            </View>

            {/* View chứa các chấm tròn điều hướng */}
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <View
                    style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}
                ></View>
                <View
                    style={{
                        width: 17,
                        height: 17,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: "rgb(34 200 247)",
                        marginHorizontal: 5,
                        backgroundColor: "rgb(34 200 247)",
                    }}
                ></View>
                <View
                    style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}
                ></View>
            </View>
        </View>
    );
};

// Xuất component Screen01
export default Screen01;
