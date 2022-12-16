import {
    PinInputField, PinInput, HStack,
    Button, ModalFooter, Input, FormLabel, FormControl, ModalBody,
    ModalCloseButton, ModalHeader, ModalContent, ModalOverlay, Modal, useDisclosure, Text, Image, Box
} from "@chakra-ui/react"
import React, { useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext'
import HoverProfile from "./HoverProfile";
function Otp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [sendOtp, setSendOtp] = useState(false);

    const { isAuth, toggleAuth } = useContext(AuthContext);

    const phoneNumberHandler = (e) => {
        if (phone.length === 10) {
            return;
        }
        setPhone(e.target.value);
    }

    const otpHandler = (e) => {
        setOtp(e.target.value);
    }
    const clickHandler = () => {
        setSendOtp(true);
        setPhone("");
    }
    const otpSubmitHandler = () => {
        setSendOtp(false);
        toggleAuth(!isAuth);
        onClose();
    }
    if (sendOtp === true) {
        return (
            <>
                {
                    isAuth === false ?
                        <Button className="loginBtn" onClick={onOpen} style={{ backgroundColor: "red" }}>
                            LOGIN/SIGNUP
                        </Button>
                        :
                        <Button>
                            Ragini
                        </Button>
                }
                <Modal className="loginModal"
                    // initialFocusRef={initialRef}
                    // finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader><Image src="./imagess/first_Rent.png" /></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                {/* <FormLabel>Enter OTP</FormLabel> */}
                                <FormLabel>Please enter the OTP</FormLabel>
                                <HStack>
                                    <PinInput>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                </HStack>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={otpSubmitHandler}>Submit </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }
    else {
        return (
            <>
                {
                    isAuth === false ?
                        <Button onClick={onOpen}>
                            LOGIN/SIGNUP
                        </Button>
                        :
                        <Button>
                            {/* add popup here */}
                            Ragini
                            <HoverProfile />
                        </Button>
                }
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader><Image src="./imagess/first_Rent.png" /></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Enter your number to
                                    Signup or Login</FormLabel>
                                <Input ref={initialRef} placeholder='Enter Your Phone Number*' onChange={(e) => phoneNumberHandler(e)} type="text" maxlength="10" value={phone} />
                                <Box fontSize='sm'>{phone.length}/10</Box>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button disabled={phone === '' ? "disabled" : ""} onClick={clickHandler}>Continue</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }
}
export default Otp