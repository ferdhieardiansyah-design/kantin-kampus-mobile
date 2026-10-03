import { ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

const quickActions = [
  { label: 'Food', emoji: '🍜', color: '#EAF3FF' },
  { label: 'Drink', emoji: '☕', color: '#E6F7EE' },
  { label: 'Promo', emoji: '🎉', color: '#EAF2FF' },
  { label: 'More', emoji: '✨', color: '#FDEAEA' },
];

const popularPlaces = [
  {
    name: 'Nasi Rames',
    tag: '4.8',
    color: '#FFF1D9',
    item: 'Ayam + sayur + sambal',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ayam Geprek',
    tag: '4.9',
    color: '#E9F6FF',
    item: 'Pedas gurih',
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Soto Ayam',
    tag: '4.7',
    color: '#E9FFF3',
    item: 'Hangat & segar',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Es Teh',
    tag: '4.6',
    color: '#FFF2E8',
    item: 'Minuman dingin',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2e6?auto=format&fit=crop&w=900&q=80',
  },
];

const deals = [
  { title: 'Free delivery', subtitle: 'min. spend Rp 35.000', badge: 'Today' },
  { title: 'Lunch combo', subtitle: '2 for 1 selected items', badge: 'Hot' },
  { title: 'New merchant', subtitle: 'Up to 30% off', badge: 'New' },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <ThemedView style={styles.topBar}>
            <ThemedView type="backgroundElement" style={styles.avatar}>
              <ThemedText type="smallBold" style={styles.avatarText}>F</ThemedText>
            </ThemedView>

            <ThemedView style={styles.locationBlock}>
              <ThemedText type="small" themeColor="textSecondary">
                Deliver to
              </ThemedText>
              <ThemedText type="smallBold">Jl. Sudirman, Bandung</ThemedText>
            </ThemedView>

            <ThemedView type="backgroundElement" style={styles.iconWrap}>
              <ThemedText type="smallBold">🔔</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.searchBar}>
            <ThemedText type="small" themeColor="textSecondary">🔎 Search food, drink, or places</ThemedText>
          </ThemedView>

          <ThemedView style={styles.heroCard}>
            <ThemedView style={styles.heroTextWrap}>
              <ThemedText type="smallBold" style={styles.badge}>Kantin Kampus</ThemedText>
              <ThemedText type="title" style={styles.heroTitle}>
                Makan enak,{"\n"}nyaman di kampus.
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary" style={styles.heroSubtext}>
                Nikmati nasi box, kopi, dan promo harian favorit mahasiswa dengan delivery cepat.
              </ThemedText>
            </ThemedView>

            <Pressable style={styles.primaryButton}>
              <ThemedText type="smallBold" style={styles.primaryButtonText}>Pesan sekarang</ThemedText>
            </Pressable>
          </ThemedView>

          <ThemedView style={styles.actionGrid}>
            {quickActions.map((item) => (
              <Pressable key={item.label} style={styles.actionItem}>
                <ThemedView type="backgroundElement" style={[styles.actionIcon, { backgroundColor: item.color }]}>
                  <ThemedText type="smallBold" style={styles.actionIconText}>{item.emoji}</ThemedText>
                </ThemedView>
                <ThemedText type="smallBold" style={styles.actionLabel}>{item.label}</ThemedText>
              </Pressable>
            ))}
          </ThemedView>

          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Menu favorit</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Lihat semua</ThemedText>
          </ThemedView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalRow}>
            {popularPlaces.map((place) => (
              <ThemedView key={place.name} type="backgroundElement" style={styles.foodCard}>
                <ThemedView style={[styles.foodImage, { backgroundColor: place.color }]}>
                  <Image
                    source={{ uri: place.image }}
                    style={styles.foodPhoto}
                    resizeMode="cover"
                  />
                </ThemedView>
                <ThemedView style={styles.foodMeta}>
                  <ThemedText type="smallBold">{place.name}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">{place.item}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.ratingChip}>
                  <ThemedText type="smallBold" style={styles.ratingText}>⭐ {place.tag}</ThemedText>
                </ThemedView>
              </ThemedView>
            ))}
          </ScrollView>

          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Hot deals</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">Fresh picks</ThemedText>
          </ThemedView>

          <ThemedView style={styles.dealList}>
            {deals.map((deal) => (
              <ThemedView key={deal.title} type="backgroundElement" style={styles.dealCard}>
                <ThemedView style={styles.dealBadge}>
                  <ThemedText type="smallBold" style={styles.badgeText}>{deal.badge}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.dealContent}>
                  <ThemedText type="smallBold">{deal.title}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">{deal.subtitle}</ThemedText>
                </ThemedView>
                <ThemedText type="smallBold" style={styles.chevron}>›</ThemedText>
              </ThemedView>
            ))}
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
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    paddingBottom: Spacing.six,
    gap: Spacing.three,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F4FD9',
  },
  avatarText: {
    color: '#FFFFFF',
  },
  locationBlock: {
    flex: 1,
    gap: 2,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    borderRadius: 18,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    alignItems: 'center',
    flexDirection: 'row',
  },
  heroCard: {
    padding: Spacing.four,
    borderRadius: 28,
    backgroundColor: '#1A5CFF',
    gap: Spacing.three,
  },
  heroTextWrap: {
    gap: Spacing.two,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFFFFF',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 999,
    overflow: 'hidden',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 40,
  },
  heroSubtext: {
    color: 'rgba(255,255,255,0.8)',
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: Spacing.two,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#1A5CFF',
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  actionItem: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.one,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIconText: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  horizontalRow: {
    paddingRight: Spacing.one,
    gap: Spacing.two,
  },
  foodCard: {
    width: 180,
    borderRadius: 22,
    padding: Spacing.two,
    gap: Spacing.two,
  },
  foodImage: {
    height: 110,
    borderRadius: 16,
    overflow: 'hidden',
  },
  foodPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  foodMeta: {
    gap: 2,
  },
  ratingChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAF9F0',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 999,
  },
  ratingText: {
    color: '#1A5CFF',
    fontSize: 12,
  },
  dealList: {
    gap: Spacing.two,
  },
  dealCard: {
    borderRadius: 18,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  dealBadge: {
    backgroundColor: '#FFF4D6',
    borderRadius: 12,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  badgeText: {
    color: '#B36B00',
    fontSize: 11,
  },
  dealContent: {
    flex: 1,
    gap: 2,
  },
  chevron: {
    fontSize: 26,
    color: '#1A5CFF',
  },
});
