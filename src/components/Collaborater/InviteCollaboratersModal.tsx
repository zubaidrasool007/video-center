import {
    Box,
    Button,
    Card,
    CardContent,
    Input,
    InputAdornment,
    Link,
    Modal,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SMSIcon } from "../../../public/assets/icons";

export const InviteCollaboratersModal = ({ open, handleClose }: any) => {

    const [newCollaborator, setNewCollaborator] = useState<string>("");

    const handleAddCollaborator = () => {
        setNewCollaborator("");
        handleClose();
    };

    const handleCloseModal = () => {
        handleClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Card
                    sx={{
                        borderRadius: "16px",
                        width: 445,
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Typography color="#222" fontSize="22px" fontWeight={500}>
                            Invite Collaboraters
                        </Typography>
                        <Typography color="#222" fontSize="14px" mb={3}>
                            Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                        <form>
                            <Typography color="#222" fontSize="14px" mb={1}>
                                Name or Email
                            </Typography>
                            <Input
                                placeholder="e.g John , john@gmail.com"
                                startAdornment={
                                    <InputAdornment position="end">
                                        <SMSIcon sx={{ mr: 2 }} />
                                    </InputAdornment>
                                }
                                sx={{
                                    "&:before": {
                                        border: "none !important",
                                    },
                                    background: "rgba(249, 249, 249, 0.63)",
                                    borderRadius: "16px",
                                    fontSize: "14px",
                                    width: "100%",
                                    height: "50px",
                                    px: 3,
                                    color: "#222",
                                    mb: 2.5,
                                }}
                                onChange={(e) => setNewCollaborator(e.target.value)}
                            />
                            <Typography
                                component="span"
                                fontSize="12.405px"
                                color="#222"
                                display="inline-block"
                                mb={4}
                            >
                                This site is protected by reCAPTCHA and the Google and
                                <Typography
                                    component="span"
                                    fontSize="12.405px"
                                    fontWeight={500}
                                >
                                    <Link color="#4D33EF">Privacy Policy</Link>
                                </Typography>{" "}
                                and{" "}
                                <Typography
                                    component="span"
                                    fontSize="12.405px"
                                    fontWeight={500}
                                >
                                    <Link color="#4D33EF">Terms of Service </Link>
                                </Typography>{" "}
                                apply.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    px: 2,
                                    py: 1,
                                    borderRadius: "8px",
                                    background: "#5136FF",
                                    textTransform: "initial",
                                    fontSize: "14px",
                                    display: "block",
                                    ml: "auto",
                                }}
                                onClick={handleAddCollaborator}
                            >
                                Add
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    );
};
