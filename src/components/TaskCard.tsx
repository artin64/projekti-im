import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Task } from "@/data/tasks";

type Props = {
  task: Task;
  onPress: () => void;
};

export function TaskCard({ task, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.topRow}>
        <View style={[styles.dot, task.completed && styles.completedDot]} />
        <Text style={styles.course} numberOfLines={1}>{task.course}</Text>
        <Text style={[styles.status, task.completed && styles.done]}>
          {task.completed ? "Përfunduar" : "Në pritje"}
        </Text>
      </View>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.date}>Afati: {task.dueDate}</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E8EAEF",
    padding: 17,
    marginBottom: 12,
  },
  pressed: { opacity: 0.75 },
  topRow: { flexDirection: "row", alignItems: "center", gap: 7 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#D97706" },
  completedDot: { backgroundColor: "#16845B" },
  course: { flex: 1, fontSize: 11, color: "#777F8C" },
  status: { fontSize: 10, color: "#B76A0B", fontWeight: "600" },
  done: { color: "#16845B" },
  title: { fontSize: 16, fontWeight: "700", color: "#19212E", marginTop: 13, lineHeight: 23 },
  bottomRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 14 },
  date: { color: "#777F8C", fontSize: 12 },
  arrow: { fontSize: 21, color: "#202A3A" },
});
