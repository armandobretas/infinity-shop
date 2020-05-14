import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import { Header, SearchBar, Overlay } from "react-native-elements";
import Drawer from "react-native-drawer";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import MenuLateral from "../../components/MenuLateral";
import { Alert } from "react-native";

console.disableYellowBox = true;

const categorias = [
  {
    name: "Todos",
    id: 0,
  },
  {
    name: "Smartphones",
    id: 2,
  },
  {
    name: "Informática",
    id: 3,
  },
  {
    name: "Impressão 3D",
    id: 4,
  },
  {
    name: "Drones",
    id: 5,
  },
  {
    name: "Cadeiras",
    id: 6,
  },
];
const list = [
  {
    id: 1,
    imgUrl:
      "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/17_area-51m_non-tobii/pdp/laptops-aw-alienware-area-51m-nt-pdp-mod-12.jpg?qlt=95&fit=constrain,1&hei=465&wid=965&fmt=jpg",
    name: "KIT Gamer AlienWare",
    price: "11.299.99",
    idCategoria: 3,
  },
  {
    id: 2,
    imgUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1541713862468",
    name: "Macbook Air i7 1TB SSD",
    price: "999.99",
    idCategoria: 3,
  },
  {
    id: 3,
    imgUrl:
      "https://i.zst.com.br/images/smartphone-apple-iphone-11-pro-max-64gb-camera-tripla-apple-a13-bionic-ios-13-photo929882920-12-13-32.jpg",
    name: "Celular Iphone 11 MAX PRO ",
    price: "989.99",
    idCategoria: 2,
  },
  {
    id: 4,
    imgUrl:
      "https://cdn.thingiverse.com/assets/97/74/81/c1/05/featured_preview_C6857F2F-0C49-4674-BD36-9E68C74698F0.jpeg",
    name: "Bebê Yoda",
    price: "9.99",
    idCategoria: 4,
  },
  {
    id: 5,
    imgUrl:
      "https://a-static.mlcdn.com.br/618x463/drone-dji-mavic-mini-fly-more-combo-com-camera-2-7k/magazineluiza/224802900/49e66e4c6934965ede5c7e4dc30f1b6c.jpg",
    name: "Drone Mavic Pro",
    price: "129.99",
    idCategoria: 5,
  },
  {
    id: 6,
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGYDnQ2RXdFpAeUurj3HoAvpWSnIEkxlDkJgIqXfEtg9Bu-oCEaOMUIohv8A&usqp=CAE",
    name: "Cadeira Gamer RED Dragon",
    price: "229.99",
    idCategoria: 6,
  },
];

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [listProducts, setListProducts] = useState([]);
  const [idCategoria, setIdCategoria] = useState(0);
  const [nameCategoria, setNameCategoria] = useState("Todos");
  const [productDetail, setProductDetail] = useState({});

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setListProducts(list);
  }, []);

  useEffect(() => {
    handleFindCategoria();
  }, [idCategoria]);

  const handleViewProduct = (product) => {
    setProductDetail(product);
    handleModal();
  };

  const handleFindCategoria = () => {
    categorias.find((c) => {
      if (c.id === idCategoria) {
        setNameCategoria(c.name);
      }
    });
  };

  const handleFilterProcutsByIdCategoria = (id) => {
    setIdCategoria(id);
    if (id === 0) {
      setListProducts(list);
      return;
    }
    let arr = [];
    list.find((product) => {
      if (product.idCategoria === id) {
        arr.push(product);
      }
    });
    if (arr.length > 0) {
      setListProducts(arr);
    } else {
      setListProducts([]);
    }
  };

  const handleSearch = (value) => {
    setLoading(true);
    setSearchText(value);
    if (value.trim() !== "") {
      let arr = [];
      const itens = listProducts.find((product) => {
        if (product.name.toUpperCase().match(value.toUpperCase())) {
          arr.push(product);
        }
      });
      setListProducts(arr);
      setLoading(false);
    } else {
      setLoading(false);
      setListProducts(list);
    }
  };

  return (
    <>
      <Overlay isVisible={modal} onBackdropPress={handleModal}>
        <TouchableOpacity
          onPress={handleModal}
          style={{ alignItems: "flex-end" }}
        >
          <Feather name="x-square" size={28} />
        </TouchableOpacity>
        <Image
          source={{
            uri: productDetail.imgUrl,
          }}
          style={{ width: "100%", height: 300 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {productDetail && productDetail.name}
        </Text>
        <Text style={{ fontSize: 20 }}>Código:</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {productDetail && productDetail.id}
        </Text>
        <Text style={{ fontSize: 20 }}>Valor: </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {productDetail && productDetail.price}
        </Text>
        <Text style={{ fontSize: 20 }}>Descrição: </Text>
        <Text style={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sapiente
          numquam libero nostrum sunt reiciendis repellendus facere iusto dolor
          temporibus asperiores sint? Ipsa in, corporis rerum error fugiat
          praesentium voluptatibus.
        </Text>
      </Overlay>
      <Drawer
        open={menuVisible}
        onClose={() => setMenuVisible(!menuVisible)}
        openDrawerOffset={20} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
        content={<MenuLateral />}
      >
        <Header
          leftComponent={
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
              <Feather name="menu" size={28} color={"#fff"} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "E-Infinity Shop",
            style: { color: "#fff", fontWeight: "bold", fontSize: 23 },
          }}
          rightComponent={{ icon: "shopping-cart", color: "#fff" }}
          backgroundColor="#2d3436"
        />

        <SearchBar
          containerStyle={{ marginTop: -2 }}
          showLoading={loading}
          placeholder="O que você esta procurando ?"
          onChangeText={handleSearch}
          value={searchText}
        />

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.content}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {categorias.map((e, i) => (
                  <TouchableOpacity
                    onPress={() => handleFilterProcutsByIdCategoria(e.id)}
                  >
                    <Text
                      style={
                        e.id === idCategoria
                          ? styles.optionActive
                          : styles.option
                      }
                      key={i}
                    >
                      {e.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Text style={styles.title}>{nameCategoria}</Text>
              <View style={styles.productsBox}>
                {listProducts && listProducts.length > 0 ? (
                  listProducts.map((e, i) => (
                    <View style={styles.productContainer} key={i}>
                      <TouchableOpacity onPress={() => handleViewProduct(e)}  style={{ width: "100%", height: 210 }}>
                      <Image
                        onPress={() => handleViewProduct(e)}
                        source={{
                          uri: e.imgUrl,
                        }}
                        style={{ width: "100%", height: "50%" }}
                      />
                        <Text style={styles.productName}>{e.name}</Text>
                        <Text style={styles.productPrice}>R$ {e.price}</Text>
                      </TouchableOpacity>
                      <View style={styles.productActions}>
                        <TouchableOpacity>
                          <Feather name="shopping-cart" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Feather name="heart" size={24} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                ) : (
                  <Text style={styles.empty}>Nenhum produto encontrado...</Text>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </Drawer>
    </>
  );
}

const drawerStyles = {
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
};
