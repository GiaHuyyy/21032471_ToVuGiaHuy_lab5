import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Khởi tạo component Screen04
const Screen04 = ({ navigation }) => {
    // Khai báo state cho số lượng và kích thước
    const [quantity, setQuantity] = useState(2);
    const [size, setSize] = useState("M");

    // Khai báo state cho danh sách sản phẩm
    const [dataProduct] = useState([
        { key: 1, label: "Product1", price: 2.99, imageProduct: require("../assets/Data/Image7(1).png"), rating: 4.5 },
        { key: 2, label: "Product2", price: 3.99, imageProduct: require("../assets/Data/Image7(2).png"), rating: 4.7 },
        { key: 3, label: "Product3", price: 1.99, imageProduct: require("../assets/Data/Image7(4).png"), rating: 4.3 },
        { key: 4, label: "Product4", price: 2.49, imageProduct: require("../assets/Data/Image7.png"), rating: 4.1 },
    ]);

    // Khai báo state cho sản phẩm được chọn
    const [productSelected, setProductSelected] = useState(dataProduct[0]);

    return (
        <View style={{ padding: 20 }}>
            {/* Header với nút quay lại và tên sản phẩm */}
            <View style={{ marginBottom: 20, flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Screen03")}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "600" }}>{productSelected.label}</Text>
            </View>

            {/* Hình ảnh sản phẩm và danh sách các sản phẩm khác */}
            <View style={{ alignItems: "center" }}>
                <Image source={productSelected.imageProduct} style={{ width: 120, height: 120 }} />
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {dataProduct.map((product) => (
                        <TouchableOpacity key={product.key} onPress={() => setProductSelected(product)}>
                            <Image source={product.imageProduct} style={{ width: 30, height: 30, marginRight: 10 }} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Giá sản phẩm và khuyến mãi */}
            <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>${productSelected.price}</Text>
            <Text style={{ color: "red", marginBottom: 10 }}>Buy 1 get 1</Text>

            {/* Đánh giá sản phẩm */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <Text style={{ marginRight: 5 }}>{productSelected.rating}</Text>
                {[...Array(Math.round(productSelected.rating))].map((_, index) => (
                    <Icon key={index} name="star" size={20} color="gold" />
                ))}
            </View>

            {/* Chọn kích thước sản phẩm */}
            <Text style={{ marginBottom: 5 }}>Size:</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                {["XS", "S", "M", "L", "XL"].map((item) => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => setSize(item)}
                        style={{
                            padding: 10,
                            borderWidth: 1,
                            borderColor: size === item ? "blue" : "gray",
                            backgroundColor: size === item ? "lightblue" : "white",
                            marginRight: 5,
                            borderRadius: 5,
                        }}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Chọn số lượng sản phẩm */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <Text>Quantity:</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                        <Text style={{ fontSize: 20 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
                    <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                        <Text style={{ fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Tổng giá tiền */}
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
                Total: ${(productSelected.price * quantity).toFixed(2)}
            </Text>

            {/* Nút thêm vào giỏ hàng */}
            <TouchableOpacity
                style={{ backgroundColor: "rgb(34, 200, 247)", paddingVertical: 15, borderRadius: 20 }}
                onPress={() => {
                    console.log(`Added ${quantity} of ${productSelected.label} to cart`);
                    navigation.navigate("Screen03");
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen04;
