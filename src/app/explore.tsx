import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

const grabDeals = [
  { title: 'Free Ongkir', subtitle: 'Order above Rp 40.000', accent: '#EAF3FF' },
  { title: 'Lunch Time', subtitle: 'Up to 50% off', accent: '#EAF2FF' },
  { title: 'Bestseller', subtitle: 'Top rated by local taste', accent: '#E6F7FF' },
];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedView style={styles.header}>
            <ThemedText type="subtitle">Promo Kantin Kampus</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Update hari ini</ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.banner}>
            <ThemedText type="smallBold" style={styles.bannerTag}>Flash deal</ThemedText>
            <ThemedText type="title" style={styles.bannerTitle}>30% off</ThemedText>
            <ThemedText type="small" style={styles.bannerText}>untuk menu favorit di sekitar kampusmu.</ThemedText>
          </ThemedView>

          {grabDeals.map((deal) => (
            <ThemedView key={deal.title} type="backgroundElement" style={[styles.dealRow, { backgroundColor: deal.accent }]}>
              <ThemedView style={styles.dealIcon}>
                <ThemedText type="smallBold">⚡</ThemedText>
              </ThemedView>
              <ThemedView style={styles.dealTextWrap}>
                <ThemedText type="smallBold">{deal.title}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">{deal.subtitle}</ThemedText>
              </ThemedView>
              <ThemedText type="smallBold" style={styles.arrow}>›</ThemedText>
            </ThemedView>
          ))}

          <ThemedView style={styles.miniGrid}>
            <ThemedView type="backgroundElement" style={styles.miniCard}>
              <ThemedText type="smallBold">Cashback</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">Rp 25.000</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.miniCard}>
              <ThemedText type="smallBold">Vouchers</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">12 available</ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    padding: Spacing.four,
    gap: Spacing.three,
  },
  header: {
    gap: 4,
  },
  banner: {
    borderRadius: 24,
    backgroundColor: '#1A5CFF',
    padding: Spacing.four,
    gap: Spacing.two,
  },
  bannerTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFFFFF',
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 42,
  },
  bannerText: {
    color: 'rgba(255,255,255,0.85)',
  },
  dealRow: {
    borderRadius: 18,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  dealIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealTextWrap: {
    flex: 1,
    gap: 2,
  },
  arrow: {
    fontSize: 28,
    color: '#1A5CFF',
  },
  miniGrid: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  miniCard: {
    flex: 1,
    borderRadius: 18,
    padding: Spacing.three,
    gap: 4,
  },
});
