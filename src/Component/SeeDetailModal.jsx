import React from 'react';
import { Modal, Button } from "@heroui/react";
import { ArrowRight, Rocket } from '@gravity-ui/icons';
const SeeDetailModal = ({product}) => {
    return (
        <Modal>
           <Modal.Trigger className="flex gap-2 items-center cursor-pointer">
                See Detail <ArrowRight />
            </Modal.Trigger>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>{product.name}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                A beautiful, fast, and modern React UI library for building accessible and
                                customizable web applications with ease.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full" slot="close">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default SeeDetailModal;