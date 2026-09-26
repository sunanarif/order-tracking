import React from 'react';
import { Modal, Button } from "@heroui/react";
import { ArrowRight, Rocket } from '@gravity-ui/icons';

const ActionButton = ({ action }) => {
    return (
        <Modal>
            <Modal.Trigger className="flex gap-2 items-center cursor-pointer">
                {action}
            </Modal.Trigger>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>{action}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                action == 'Contact support' ? <div>
                                    <p>
                                        Have a question or issue with your order? We're here to help —
                                        reach us through any of the options below and we'll get back to you as soon as we can.
                                    </p>
                                    <div className="mt-3 space-y-2 text-sm">
                                        <p>📞 Hotline: 16247 (9 AM – 9 PM)</p>
                                        <p>✉️ Email: support@example.com</p>
                                        <p>💬 Live chat: tap the chat icon in the app</p>
                                    </div>
                                </div> : <div> <p>
                                    Haven't received your order, or something's wrong? Let us know below —
                                    we'll follow up with the courier and get back to you within 24–48 hours.
                                </p>
                                    <textarea
                                        className="w-full mt-3 border rounded-md p-2 text-sm"
                                        rows={3}
                                        placeholder="e.g. package damaged, delivered to wrong address, still not received..."
                                    /></div>
                            }
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

export default ActionButton;