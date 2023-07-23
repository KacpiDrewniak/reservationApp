import { Reservation } from "../../types/reservation";
import { Text, View } from "react-native";
import moment from "moment/moment";
import { styles } from "./styles";

const ReservationItem = ({
  objectName,
  status,
  dateStart,
  dateStop,
}: Reservation) => {
  return (
    <View style={styles.row}>
      <View style={styles.leftElement}>
        <Text>{moment(new Date(dateStart)).format("LT")}</Text>
        <Text>{moment(new Date(dateStop)).format("LT")}</Text>
      </View>
      <View style={styles.rightElement}>
        <Text style={styles.objectStyles}>{objectName}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default ReservationItem;
