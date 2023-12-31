import { Container, Html, Section, Text } from "@react-email/components";

export default function EmailTemplate(data: any) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Every Car Buyer</Text>
          <Text style={paragraph}>Hey, here is your car evaluation: </Text>
          <Text style={paragraph}>Registration Number: {data?.registration}</Text>
          <Text style={paragraph}>Mileage: {data?.mileage}</Text>
          <Text style={paragraph}>Manufacturer: {data?.make}</Text>
          <Text style={paragraph}>Model: {data?.wheelplan}</Text>
          <Text style={paragraph}>MOT Expiry Data: {data?.motExpiryDate}</Text>
          <Text style={paragraph}>Year: {data?.yearOfManufacture}</Text>
          <Text style={paragraph}>Colour: {data?.colour}</Text>
          <Text style={paragraph}>Fuel Type: {data?.fuelType}</Text>
          <Text style={paragraph}>Engine Size: {data?.engineCapacity}</Text>
          <Text style={paragraph}>First Registered: {data?.monthOfFirstRegistration}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
