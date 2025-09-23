import {Flex, Typography} from 'antd';

const {Title, Paragraph} = Typography;

export const AccountDetailsTextComponent = () => {
  return (
    <Flex style={{padding: 24, flexDirection: 'column', gap: 16}}>
      <Title level={2}>👤 Account Details</Title>
      <Paragraph>
        Your <b>account</b> on this platform is your personal space where all
        your information, preferences, and activities are securely stored. By
        creating an account, you can access personalized features, manage your
        data, and stay connected with the platform’s services.
      </Paragraph>

      <Title level={3}>📌 What an Account Includes</Title>
      <ul>
        <li>
          <b>Profile Information:</b> Basic details like your name, email, and
          profile picture.
        </li>
        <li>
          <b>Settings:</b> Preferences for notifications, privacy, and language.
        </li>
        <li>
          <b>Activity History:</b> A record of your interactions, such as
          bookings, purchases, or saved content.
        </li>
        <li>
          <b>Security:</b> Password protection, login history, and optional
          two-factor authentication.
        </li>
      </ul>

      <Title level={3}>⚙️ Why Your Account Matters</Title>
      <Paragraph>
        Having an account gives you a more tailored experience on the platform.
        You can:
      </Paragraph>
      <ul>
        <li>Access exclusive features and tools.</li>
        <li>Save your progress, preferences, and history.</li>
        <li>Connect with peers or collaborators.</li>
        <li>Earn rewards, points, or achievements tied to your profile.</li>
      </ul>

      <Title level={3}>🔒 Security of Your Account</Title>
      <Paragraph>
        Your account is protected with industry-standard security measures. We
        recommend:
      </Paragraph>
      <ul>
        <li>Using a strong, unique password.</li>
        <li>Enabling two-factor authentication if available.</li>
        <li>Reviewing your account activity regularly.</li>
      </ul>

      <Title level={3}>✨ Next Steps</Title>
      <Paragraph>
        Visit your <b>Account Settings</b> to update your profile, change your
        password, or customize your experience. Keeping your account up to date
        ensures you get the best out of the platform.
      </Paragraph>
    </Flex>
  );
};
