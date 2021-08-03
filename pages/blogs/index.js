import Layout from "@/components/layout/Layout";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function index() {
  return (
    <Layout>
      <InputGroup className="mb-3 broder-react">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Layout>
  );
}
