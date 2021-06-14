import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Col, Button } from 'react-bootstrap';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Form>
        <Form.Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
            Preference
          </Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="0">Choose...</option>
            <option value="1">Ion Orchard</option>
            <option value="2">Shaw House</option>
            <option value="3">Lucky Plaza</option>
            <option value="4">Wisma Atria</option>
            <option value="5">Ngee Ann City</option>
          </Form.Control>
        </Col>
        <Col xs="auto" className="my-1">
          <Form.Check
            type="checkbox"
            id="customControlAutosizing"
            label="Remember my preference"
            custom
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Row>
    </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
