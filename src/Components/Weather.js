import React from "react";
import {
  Header,
  Flag,
  Label,
  Divider,
  Table,
  Message
} from "semantic-ui-react";

const Weather = props => {
  return props.cod !== 200 ? (
    <Message
      error
      header="There was some errors loading the weather"
      list={[
        "The weather service may be unavaible or you have not type the city correctly",
        "Please try again..."
      ]}
    />
  ) : (
    <div>
      <Header as="h2">
        <Flag name={props.flag} />
        {props.location}, {props.country}
      </Header>
      <Divider />
      <Label size="big">{props.temp} ° C</Label>
      <Label image size="big">
        <img src={props.icon} alt="icon" />
        {props.desc}
      </Label>
      <Table celled>
        <Table.Body>
          <Table.Row textAlign="center">
            <Table.Cell>Max Temperature</Table.Cell>
            <Table.Cell>{props.maxTemp} ° C</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Min Temperature</Table.Cell>
            <Table.Cell>{props.minTemp} ° C</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Humidity</Table.Cell>
            <Table.Cell>{props.humidity} %</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Pressure</Table.Cell>
            <Table.Cell>{props.pressure} hpa</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Wind Speed</Table.Cell>
            <Table.Cell>{props.wind} meter/sec</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Weather;
