import { Reservation } from "../../types/reservation";
import { Text, View } from "react-native";
import moment from "moment/moment";
import { styles } from "./styles";

const ReservationItem = ({
  objectName,
  status,
  dateStart,
  dateStop,
  createdAt,
}: Reservation) => {
  return (
    <View style={styles.row}>
      <View style={styles.leftElement}>
        <Text>{moment(new Date(dateStart)).format("LT")}</Text>
        <Text>{moment(new Date(dateStop)).format("LT")}</Text>
      </View>
      <View style={styles.rightElement}>
        <Text style={styles.objectStyles}>{objectName}</Text>
        <Text>Status: {status}</Text>
        <Text>{status}</Text>
        <Text style={{ fontStyle: "italic" }}>
          Utworzona: {moment(new Date(createdAt)).format("L")}
        </Text>
      </View>
    </View>
  );
};

export default ReservationItem;
