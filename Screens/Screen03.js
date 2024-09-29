import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Component Screen03
const Screen03 = ({ navigation }) => {
    // Khai báo state cho checkbox, user, email và password
    const [isChecked, setIsChecked] = useState(false); // Trạng thái checkbox
    const [user, setUser] = useState("user01");
    const [email, setEmail] = useState("ToVuGiaHuy");
    const [password, setPassword] = useState("12345678");

    // Khai báo state cho thông tin người dùng
    const [info, setInfo] = useState({
        user: "",
        email: "",
        password: "",
    });

    return (
        <View>
            {/* Hình ảnh đầu trang */}
            <View style={{ marginBottom: 20 }}>
                <Image source={require("../assets/Data/Image_20.png")} style={{ height: 200, width: "100%" }} />
            </View>

            <View style={{ padding: 20 }}>
                {/* Tiêu đề */}
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontSize: 30, fontWeight: "600", marginVertical: 10 }}>Welcome</Text>
                </View>
                <View>
                    {/* Input email */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 15,
                            borderWidth: 1,
                            borderRadius: 20,
                            padding: 10,
                        }}
                    >
                        <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput placeholder="Enter your email" style={{ flex: 1 }} value={email} onChangeText={setEmail} />
                    </View>

                    {/* Input password */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 15,
                            borderWidth: 1,
                            borderRadius: 20,
                            padding: 10,
                        }}
                    >
                        <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ flex: 1 }}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                <View>
                    {/* Nút đăng nhập */}
                    <TouchableOpacity
                        style={{
                            width: "94%",
                            marginLeft: 16,
                            marginTop: 11,
                            backgroundColor: "rgb(34, 200, 247)",
                            paddingVertical: 11,
                            borderRadius: 20,
                        }}
                        onPress={() => {
                            // Kiểm tra nếu user, email và password không rỗng
                            if (user && email && password) {
                                // Cập nhật thông tin người dùng
                                setInfo({
                                    user: user,
                                    email: email,
                                    password: password,
                                });
                                // Điều hướng đến Screen04
                                navigation.navigate("Screen04");
                                console.log(info);
                            } else {
                                // Hiển thị thông báo nếu chưa điền đủ thông tin
                                alert("Please fill all fields and agree to the terms.");
                            }
                        }}
                    >
                        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Screen03;
