import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { getTaskById } from "@/data/tasks";

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const task = getTaskById(id);

  if (!task) {
    return (
      <SafeAreaView style={styles.safe}>
        <Stack.Screen options={{ title: "Detajet e detyrës" }} />
        <View style={styles.center}>
          <Text style={styles.title}>Detyra nuk u gjet</Text>
          <Text style={styles.description}>
            Kontrollo identifikuesin e detyrës.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6F8" />
      <Stack.Screen options={{ title: "Detajet e detyrës" }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>{task.course}</Text>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.statusCard}>
          <Text style={styles.label}>STATUSI</Text>
          <Text style={styles.status}>
            {task.completed ? "Përfunduar" : "Në pritje"}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>AFATI I DORËZIMIT</Text>
          <Text style={styles.value}>{task.dueDate}</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>PËRSHKRIMI</Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F5F6F8" },
  content: { padding: 20, paddingTop: 28, paddingBottom: 36 },
  eyebrow: { fontSize: 12, fontWeight: "700", color: "#7B8492", letterSpacing: 1 },
  title: { fontSize: 27, fontWeight: "800", color: "#172033", marginTop: 12, lineHeight: 35 },
  statusCard: { backgroundColor: "#172033", borderRadius: 18, padding: 20, marginTop: 26 },
  label: { fontSize: 10, fontWeight: "700", letterSpacing: 1, color: "#7B8492" },
  status: { fontSize: 18, fontWeight: "700", color: "#FFFFFF", marginTop: 9 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 18, borderWidth: 1, borderColor: "#E8EAEF", padding: 20, marginTop: 16 },
  value: { fontSize: 15, fontWeight: "600", color: "#172033", marginTop: 10 },
  divider: { height: 1, backgroundColor: "#E8EAEF", marginVertical: 22 },
  description: { fontSize: 15, lineHeight: 24, color: "#626C7A", marginTop: 10 },
  center: { flex: 1, justifyContent: "center", padding: 24 }
});