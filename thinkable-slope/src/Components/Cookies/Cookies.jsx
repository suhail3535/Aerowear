import React, { useEffect, useState } from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";
import style from "./Cookies.css";

const Cookies = () => {
    const [showStack, setShowStack] = useState(false);

    const handleCookie = () => {
        setShowStack(false);
    };

    useEffect(() => {
        const x = setTimeout(() => {
            setShowStack(true);
        }, 3000);
        return () => {
            clearTimeout(x);
        };
    }, []);

    return (
        <div>
            {showStack && (
                <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
                    <Stack direction="row" alignItems="center">
                        <Text fontWeight="semibold">Cookies and Privacy</Text>
                        <FcLock />
                    </Stack>

                    <Stack
                        direction={{ base: "column", md: "row" }}
                        justifyContent="space-between">
                        <Text
                            fontSize={{ base: "sm" }}
                            textAlign={"left"}
                            maxW={"4xl"}>
                            By using our website, you consent to our use of
                            cookies and similar technologies as outlined in this
                            policy. You can choose to disable cookies in your
                            browser settings, but please note that this may
                            limit your ability to use certain features on our
                            website.
                        </Text>
                        <Stack direction={{ base: "column", md: "row" }}>
                            <button
                                className="pref-cookies">
                                Cookie Preferences
                            </button>
                            <button
                                onClick={handleCookie}
                                className="ok-cookies">
                                OK
                            </button>
                        </Stack>
                    </Stack>
                </Stack>
            )}
        </div>
    );
};

export default Cookies;
