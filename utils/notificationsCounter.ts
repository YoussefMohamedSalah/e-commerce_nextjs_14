export function calculateUnreadCount(notifications: any[]) {
    return notifications[0]?.unread_count! || 0;
}
