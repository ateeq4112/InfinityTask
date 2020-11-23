import React, { Component } from 'react';
import {
     StatusBar, View, Text,
     TouchableHighlight,
    ScrollView,
    Image
} from 'react-native';

import { homeStyle } from '../styles/homeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={homeStyle.mainContainer}>
                <StatusBar barStyle="light-content"
                    translucent
                    backgroundColor="#B02E46" />
                <View style={homeStyle.headerContainer}>
                    <View style={homeStyle.leftViewHeader}>
                        <Text style={homeStyle.hederContanerText}>Index</Text>
                    </View>
                    <View style={homeStyle.rightViewHeader}>
                        <View style={homeStyle.leftViewInner}>
                            <View style={homeStyle.leftViewInner1}>
                                <Text style={homeStyle.leftViewInner1Text}>0</Text>
                            </View>
                            <Image source={require('../assets/images/shoppingCart.png')}
                                style={homeStyle.ShoppingCart} />
                        </View>
                        <View style={homeStyle.RightViewInner}>
                            <TouchableHighlight>
                            <Image source={require('../assets/images/menu.png')} style={homeStyle.headerSideBar} ></Image>
                            </TouchableHighlight>
                           
                        </View>
                    </View>

                </View>
                <ScrollView>
                    <View style={homeStyle.upperBodyMainContainer}>
                        <Text style={homeStyle.catagoriesText}>All Categories</Text>
                        <View style={homeStyle.catagoriesContainer}>
                            <View style={homeStyle.ItemsArea}>
                                <View style={homeStyle.ImageAreaEgg}>
                                    <Image source={require('../assets/images/eggs.png')}
                                        style={homeStyle.categoriesImageEggs} />
                                </View>
                                <Text style={homeStyle.imageText}>Egg</Text>
                            </View>
                            <View style={homeStyle.ItemsArea}>
                                <View style={homeStyle.ImageArea}>
                                    <Image source={require('../assets/images/Group797.png')}
                                        style={homeStyle.categoriesImage} />
                                </View>
                                <Text style={homeStyle.imageText}>Meat</Text>
                            </View>
                            <View style={homeStyle.ItemsArea}>
                                <View style={homeStyle.ImageArea}>
                                    <Image source={require('../assets/images/vegitable.png')}
                                        style={homeStyle.categoriesImage} />
                                </View>
                                <Text style={homeStyle.imageText}>Vegetable</Text>
                            </View>
                            <View style={homeStyle.ItemsArea}>
                                <View style={homeStyle.ImageArea}>
                                    <Image source={require('../assets/images/gee.png')}
                                        style={homeStyle.categoriesImage} />
                                </View>
                                <Text style={homeStyle.imageText}>Ghee</Text>
                            </View>
                        </View>
                    </View>
                    <View style={homeStyle.productTextContainer}>
                        <Text style={homeStyle.productText}>Featured Products</Text>
                        <TouchableHighlight >
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, }}>
                                <View style={homeStyle.textView}>
                                    <Text style={homeStyle.viewText}>View all </Text>
                                </View>
                                <View style={homeStyle.iconView}>
                                    <Image source={require('../assets/images/icon.png')}
                                    />
                                </View>

                            </View>

                        </TouchableHighlight>
                    </View>
                    <View style={homeStyle.mainBodyContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={homeStyle.bgImageContainer}>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#B02E46' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>


                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={homeStyle.productTextContainer}>
                        <Text style={homeStyle.productText}>New Products</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, }}>
                            <View style={homeStyle.textView}>
                                <Text style={homeStyle.viewText}>View all </Text>
                            </View>
                            <View style={homeStyle.iconView}>
                                <Image source={require('../assets/images/icon.png')}
                                />
                            </View>

                        </View>
                    </View>
                    <View style={homeStyle.mainBodyContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={homeStyle.bgImageContainer}>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#B02E46' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>


                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={homeStyle.productTextContainer}>
                        <Text style={homeStyle.productText}>Featured Products</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, }}>
                            <View style={homeStyle.textView}>
                                <Text style={homeStyle.viewText}>View all </Text>
                            </View>
                            <View style={homeStyle.iconView}>
                                <Image source={require('../assets/images/icon.png')}
                                />
                            </View>

                        </View>
                    </View>
                    <View style={homeStyle.mainBodyContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={homeStyle.bgImageContainer}>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#B02E46' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>


                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={homeStyle.ItemsMainContainer}>
                                    <View style={homeStyle.ItemsContainer}>
                                        <View style={homeStyle.ItemsContainerHeader}>
                                            <View style={homeStyle.quantityContainer}>
                                                <Text style={homeStyle.quantityText}>100G</Text>
                                            </View>
                                            <View style={homeStyle.heartContainer}>
                                                <AntDesign name='heart' size={15} color='#636363' />
                                            </View>
                                        </View>
                                        <View style={homeStyle.ItemsImageContainer}>
                                            <Image source={require('../assets/images/Rectangle1504.png')}
                                                style={homeStyle.Garlic} />
                                        </View>
                                        <View style={homeStyle.ItemsTextContainer}>
                                            <Text style={homeStyle.ItemsText}>Ginger</Text>
                                        </View>
                                        <View style={homeStyle.ItemsPriceContainer}>
                                            <Text style={homeStyle.ItemsPrice}>Rs. 60</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>


                </ScrollView>
            </View>
        );
    }
}
