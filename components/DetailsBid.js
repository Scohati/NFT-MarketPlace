import { View, Text, Image } from 'react-native'

import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'


const DetailsBid = ({ bid }) => {
    return (
        <View style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: SIZES.base,
            marginHorizontal: SIZES.base * 2.2,
        }}>
            <Image
                source={bid.item.image}
                resizeMode="contain"
                style={{
                    width: 48,
                    height: 48
                }}
            />

            <View>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.small,
                    color: COLORS.primary
                }}>
                    Bid placed by {bid.item.name}
                </Text>
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small - 2,
                    color: COLORS.secondary,
                    marginTop: 3
                }}>
                    {bid.item.date}
                </Text>
            </View>

            <EthPrice price={bid.item.price} />
        </View>
    )
}

export default DetailsBid