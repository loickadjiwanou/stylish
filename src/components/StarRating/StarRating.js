import { View, TouchableOpacity } from "react-native";
import StarRatingStyle from "./StarRating.style.js";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../assets/colors/colors.js";

const StarRating = ({ rating = 0, onRate = () => {} }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={StarRatingStyle.view}>
      {stars.map((star) => (
        <TouchableOpacity key={star} onPress={() => onRate(star)}>
          <AntDesign
            name="star"
            size={20}
            color={star <= rating ? colors.stars : colors.lightgray2}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
