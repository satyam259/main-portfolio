import { Html, Text } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplateForUser({
  name,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Text>
        Dear <strong>{name}</strong>,
      </Text>
      <Text>I have received your email.</Text>
      <Text>
        I appreciate your interest and will get back to you as soon as possible
        regarding your inquiry.
      </Text>
      <Text>
        <strong>Subject:</strong> {subject}
      </Text>
      <Text>
        <strong>Message:</strong> {message}
      </Text>
      <Text>Best regards,</Text>
      <Text>Satyam Watts</Text>
    </Html>
  );
}

export function EmailTemplateForAdmin({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Text>Hey, you got a new message from your portfolio!</Text>
      <Text>
        <strong>Subject:</strong> {subject}
      </Text>
      <Text>
        <strong>Message:</strong> {message}
      </Text>
      <Text>
        <strong>From:</strong> {name}, ({email})
      </Text>
    </Html>
  );
}
