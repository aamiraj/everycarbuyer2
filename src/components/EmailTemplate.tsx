import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = `${process.env.BASE_URL}`;

const date = new Date();
const currentyear = date.getFullYear();

const EveryCarBuyerInfo = (data: any) => (
  <Html>
    <Head />
    <Preview>Everycarbuyer Service</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                style={sectionLogo}
                src={`${baseUrl}/static/logo.png`}
                width="242"
                height="35"
                alt="Every Car Buyer"
              />
            </Column>
          </Row>
        </Section>
        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>EVERYCARBUYER CAR INFO</Text>
          <Text style={paragraph}>Hello {data?.name || data?.email},</Text>
          <Text style={paragraph}>
            We hope you are happy with your life. We are really grateful that
            you choose Everycarbuyer for vehicle information. Here is the
            details on your request.
          </Text>
        </Section>
        <Section style={tableContent}>
          <Row>
            <Column style={{ padding: "8px" }}>
              <Text style={headerText}>Attribute</Text>
              <Text style={attributeText}>Registration Number</Text>
              <Text style={attributeText}>Mileage</Text>
              <Text style={attributeText}>Manufacturer</Text>
              <Text style={attributeText}>Model</Text>
              <Text style={attributeText}>MOT Expiry Data</Text>
              <Text style={attributeText}>Year</Text>
              <Text style={attributeText}>Colour</Text>
              <Text style={attributeText}>Fuel Type</Text>
              <Text style={attributeText}>Engine Size</Text>
              <Text style={attributeText}>First Registered</Text>
            </Column>
            <Column style={{ padding: "8px" }}>
              <Text style={headerText}>Data</Text>
              <Text style={infoText}>{data?.registrationNumber}</Text>
              <Text style={infoText}>{data?.mileage}</Text>
              <Text style={infoText}>{data?.make}</Text>
              <Text style={infoText}>{data?.model}</Text>
              <Text style={infoText}>{data?.motExpiryDate}</Text>
              <Text style={infoText}>{data?.yearOfManufacture}</Text>
              <Text style={infoText}>{data?.colour}</Text>
              <Text style={infoText}>{data?.fuelType}</Text>
              <Text style={infoText}>{data?.engineCapacity}</Text>
              <Text style={infoText}>{data?.monthOfFirstRegistration}</Text>
            </Column>
          </Row>
          <Hr style={hr} />
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            Thank you again for considering Everycarbuyer. We look forward to
            assisting you further.
          </Text>
          <Text style={paragraph}>Regards,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>Everycarbuyer</Text>
        </Section>

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            &copy; {currentyear} Everycarbuyer Huddersfield, West Yorkshire.
            Contact: 07857380252
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EveryCarBuyerInfo;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 20px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
  padding: "16px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 16px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const headerText = {
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 600,
};

const attributeText = {
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: 500,
};

const infoText = {
  fontSize: "16px",
  lineHeight: "20px",
};

const tableContent = {
  padding: "0 16px",
};
