import { ArrowRight, Check, CircleDollar } from "@gravity-ui/icons";
import { Button, Card, Link, Separator } from "@heroui/react";
import SeeDetailModal from "./SeeDetailModal";
import ActionButton from "./ActionButton";

const DeleveryCard = ({ data }) => {
    const { orderId, product, banner, alert, timeline, estimate, actions, empty } = data;

    return (
        <Card className="w-full max-w-sm sm:max-w-md mx-auto">
            <p className="text-gray-500 text-xs px-4 pt-4 sm:px-5 sm:pt-5">{orderId}</p>

            <Card.Header className="px-4 sm:px-5">
                <Card.Title className="text-base sm:text-lg">{product.name}</Card.Title>
                <Separator />

                <div className="space-y-2">
                    <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-gray-500">{banner.label}</p>
                        <h3 className="text-sm sm:text-base font-semibold">{banner.headline}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{banner.sub}</p>
                    </div>


                    {alert && (
                        <div>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {alert.body}
                            </p>
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        {
                            empty ? <div className="flex flex-col items-center text-center py-6 px-2">
                                <div className="text-3xl mb-2">{empty.icon}</div>
                                <p className="text-sm font-semibold mb-1">{empty.title}</p>
                                <p className="text-xs sm:text-sm text-gray-500 max-w-[26ch]">{empty.desc}</p>
                            </div> : <div className="flex gap-2 sm:gap-4 items-start min-w-max sm:min-w-0 sm:justify-between py-2">
                                {timeline.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center flex-col w-16 sm:w-auto flex-shrink-0"
                                    >
                                        <p
                                            className={`border-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 ${step.state === "done"
                                                ? "bg-green-400 border-green-400"
                                                : step.state === "current"
                                                    ? "border-green-400 bg-white"
                                                    : "border-gray-300"
                                                } flex justify-center items-center text-white`}><Check /></p>

                                        <p className="text-[10px] sm:text-xs text-center mt-1">{step.label}</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 text-center">
                                            {step.time ? `Date: ${step.time}` : ""}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>

                <Separator className="my-3" />

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-xs sm:text-sm">
                    <p className="text-gray-500">{estimate.label}</p>
                    <p className="font-semibold">{estimate.value}</p>
                </div>
                <Separator className="my-3" />
            </Card.Header>

            <Card.Footer className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col  sm:flex-row gap-2 w-full">
                        {actions?.map((action, index) => (
                            <Button
                                key={index}
                                className={`w-full ${action.type === "danger"
                                    ? "bg-red-500 text-white"
                                    : action.type === "primary"
                                        ? "bg-blue-600 text-white"
                                        : ""
                                    }`}
                            >
                                <ActionButton action={action.text}></ActionButton>
                            </Button>
                        ))}
                    </div>
                    <SeeDetailModal product={product}></SeeDetailModal>
                    
                </div>
            </Card.Footer>
        </Card>
    );
};

export default DeleveryCard;