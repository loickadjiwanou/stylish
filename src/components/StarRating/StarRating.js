import { View, TouchableOpacity } from "react-native";
import StarRatingStyle from "./StarRating.style.js";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../assets/colors/colors.js";

const StarRating = (props) => {
  const { rating = 0, onRate = () => {}, from } = props;
  const stars = [1, 2, 3, 4, 5];

  return (
    <View
      style={[
        StarRatingStyle.view,
        from === "flatlist" && {
          width: 90,
          paddingVertical: 0,
          marginLeft: 8,
          paddingBottom: 5,
        },
      ]}
    >
      {stars.map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => {
            if (star === rating) {
              onRate(0);
            } else {
              onRate(star);
            }
          }}
        >
          <AntDesign
            name="star"
            size={from === "flatlist" ? 16 : 20}
            color={star <= rating ? colors.stars : colors.lightgray2}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
