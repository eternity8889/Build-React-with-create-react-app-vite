import { useContext } from "react";
import { PhoneContext } from "../store/PhoneContext";

function ProfileBody({ email, location, skills }) {
  const { phone, setPhone } = useContext(PhoneContext);

  return (
    <tbody>
      <tr>
        <th scope="row">Email</th>
        <td>
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </td>
      </tr>
      <tr>
        <th scope="row">Location</th>
        <td>{location}</td>
      </tr>
      <tr>
        <th scope="row">Skills</th>
        <td>{skills}</td>
      </tr>
      <tr>
        <th scope="row">Phone</th>
        <td>{phone}</td>
      </tr>
    </tbody>
  );
}

export default ProfileBody;

