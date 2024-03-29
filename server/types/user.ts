export interface User {
  user_id: number
  student_id: number
  first_name: string
  last_name: string
  line_username: string
  line_service_id: string
  line_access_token: string
  line_refresh_token: string
  line_expires_at: number
  line_picture_url: string
  discord_avatar: string
  discord_username: string
  discord_service_id: string
  discord_access_token: string
  discord_refresh_token: string
  discord_expires_at: number
  has_access: boolean
}
