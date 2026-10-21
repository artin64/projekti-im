import { SafeAreaView } from "react-native-safe-area-context";
import { useMemo, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { TaskCard } from "@/components/TaskCard";
import { tasks } from "@/data/tasks";

export default function HomeScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all");

  const filteredTasks = useMemo(() => {
    if (filter === "pending") return tasks.filter((task) => !task.completed);
    if (filter === "done") return tasks.filter((task) => task.completed);
    return tasks;
  }, [filter]);

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6F8" />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() => router.push({ pathname: "/task/[id]", params: { id: item.id } })}
          />
        )}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Text style={styles.eyebrow}>STUDENT HUB · PERSONAL</Text>
            <Text style={styles.heading}>Detyrat e mia</Text>
            <Text style={styles.subtitle}>Organizo studimet. Përfundo me kohë.</Text>

            <View style={styles.summary}>
              <View>
                <Text style={styles.summaryLabel}>DETYRA GJITHSEJ</Text>
                <Text style={styles.summaryNumber}>{tasks.length}</Text>
              </View>
              <View style={styles.divider} />
              <View>
                <Text style={styles.summaryLabel}>PËRFUNDUAR</Text>
                <Text style={styles.summaryNumber}>{completedCount}</Text>
              </View>
              <View style={styles.divider} />
              <View>
                <Text style={styles.summaryLabel}>NË PRITJE</Text>
                <Text style={styles.summaryNumber}>{tasks.length - completedCount}</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Lista e detyrave</Text>
            <View style={styles.filters}>
              {([
                ["all", "Të gjitha"],
                ["pending", "Në pritje"],
                ["done", "Përfunduara"],
              ] as const).map(([key, label]) => (
                <Text
                  key={key}
                  onPress={() => setFilter(key)}
                  style={[styles.filter, filter === key && styles.activeFilter]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        }
        ListEmptyComponent={<Text style={styles.empty}>Nuk ka detyra në këtë kategori.</Text>}
        ListFooterComponent={
          <Text style={styles.footer}>STUDENT TASKS · 2026</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F5F6F8" },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 32 },
  eyebrow: { fontSize: 10, fontWeight: "700", letterSpacing: 2, color: "#7B8492" },
  heading: { fontSize: 31, fontWeight: "800", color: "#172033", marginTop: 9 },
  subtitle: { fontSize: 13, color: "#7B8492", marginTop: 7 },
  summary: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#172033", borderRadius: 20, padding: 18, marginTop: 24 },
  summaryLabel: { color: "#B7C0D0", fontSize: 8, fontWeight: "700", letterSpacing: 0.5 },
  summaryNumber: { color: "#FFFFFF", fontSize: 25, fontWeight: "800", marginTop: 8 },
  divider: { width: 1, height: 35, backgroundColor: "#3D4658" },
  sectionTitle: { fontSize: 19, fontWeight: "800", color: "#172033", marginTop: 28, marginBottom: 14 },
  filters: { flexDirection: "row", gap: 8, marginBottom: 16 },
  filter: { overflow: "hidden", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 9, backgroundColor: "#E9EBF0", color: "#626C7A", fontSize: 11, fontWeight: "600" },
  activeFilter: { backgroundColor: "#172033", color: "#FFFFFF" },
  empty: { paddingVertical: 30, color: "#777F8C", textAlign: "center" },
  footer: { textAlign: "center", color: "#A0A6B0", fontSize: 9, letterSpacing: 2, marginTop: 14, marginBottom: 10 },
});

