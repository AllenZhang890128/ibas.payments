/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    FetchCaller,
    SaveCaller
} from "ibas/index";
import * as bo from "./bo/index"

/** 业务仓库 */
export interface IBORepositoryPayments {

    /**
     * 查询 付款
     * @param fetcher 查询者
     */
    fetchPayment(fetcher: FetchCaller<bo.IPayment>);
    /**
     * 保存 付款
     * @param saver 保存者
     */
    savePayment(saver: SaveCaller<bo.IPayment>);


}
